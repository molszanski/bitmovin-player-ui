import {SettingsPanel, SettingsPanelConfig} from '../settingspanel';
import {SubtitleOverlay} from '../subtitleoverlay';
import {UIInstanceManager} from '../../uimanager';
// @ts-ignore
import { Provider, connect } from 'unistore/preact';
import { h, render } from 'preact';
import { store as uiStore, openSubtitleSettingsPanel, closeSubtitleSettingsPanel } from '../../data/ui';
import { DOM } from '../../dom';
import { SubtitleSettingsElementReact } from './subtitlesettingspanel-el';

export interface SubtitleSettingsPanelConfig extends SettingsPanelConfig {
  overlay: SubtitleOverlay;
  settingsPanel: SettingsPanel;
}

/**
 * SubtitleSettingsPanel is a settings panel specific to subtitles settings
 **/
export class SubtitleSettingsPanelReact extends SettingsPanel {

  private overlay: SubtitleOverlay;
  // private manager: SubtitleSettingsManager;
  private lastUsedCss: string[];

  constructor(config: SubtitleSettingsPanelConfig) {
    super(config);

    this.overlay = config.overlay;

    // this.manager = new SubtitleSettingsManager();

    this.config = this.mergeConfig(config, {}, this.config);
    this.lastUsedCss = [];
  }

  // Test method
  toDomElement(): DOM {
    let containerElement = new DOM(this.config.tag, {
      'id': this.config.id,
      'class': this.prefixCss(this.config.cssClass),
    });
    let withProvider = h(Provider, { store: uiStore },
      h( SubtitleSettingsElementReact, {
        className: this.prefixCss('container-wrapper'),
      })
    );

    render(withProvider, containerElement.get()[0]);
    return containerElement;
  }


  configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
    super.configure(player, uimanager);

    // Handle css overlayChanges. Again, prototype only
    uiStore.subscribe((state: any) => {
      let subs = state.subs;
      let newCss: string[] = [];

      // Fill with data
      if (subs.size !== null) {
        newCss.push(`fontsize-${subs.size}`);
      }

      // Remove prev, add new
      this.lastUsedCss.forEach((e: string) => {
        this.overlay.getDomElement().removeClass(e);
      });
      newCss.forEach((e: string) => {
        this.overlay.getDomElement().addClass(this.prefixCss(e));
      });
      this.lastUsedCss = newCss;
    });


    this.onShow.subscribe(() => {
      openSubtitleSettingsPanel();
      this.overlay.enablePreviewSubtitleLabel();
    });

    this.onHide.subscribe(() => {
      // (!) prototype-only, abstraction leak free hack(!) for animation purpose only
      setTimeout(closeSubtitleSettingsPanel, 600);
      this.overlay.removePreviewSubtitleLabel();
    });
  }
}
