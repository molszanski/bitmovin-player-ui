import { SettingsPanel, SettingsPanelConfig } from '../settingspanel';
import { SubtitleOverlay } from '../subtitleoverlay';
import { UIInstanceManager } from '../../uimanager';
import { DOM } from '../../dom';
import { h, render, VNode } from 'preact';
import { autorun } from 'mobx';
import { RootStore } from '../../reactive/stores/root';
import { OverlayCSS } from '../../reactive/stores/overlay';
import { AppContainer } from '../../reactive/containers/AppContainer';
import { IslandSubSettings } from '../../reactive/islands/islandSubtitlePanel';

export interface SubtitleSettingsPanelConfig extends SettingsPanelConfig {
  overlay: SubtitleOverlay;
  settingsPanel: SettingsPanel;
}

/**
 * SubtitleSettingsPanel is a settings panel specific to subtitles settings
 **/
export class SubtitleSettingsPanel extends SettingsPanel {
  private overlay: SubtitleOverlay;
  // private manager: SubtitleSettingsManager;
  private lastUsedCss: string[];

  private rootStore: RootStore;
  private reactNode: VNode;
  private containerElement: DOM;

  constructor(config: SubtitleSettingsPanelConfig) {
    super(config);

    this.overlay = config.overlay;

    // this.manager = new SubtitleSettingsManager();
    this.rootStore = new RootStore();
    console.log('constructor');
    this.config = this.mergeConfig(config, {}, this.config);
    this.lastUsedCss = [];
  }

  reactRender() {
    this.reactNode = h(
      AppContainer,
      { rootStore: this.rootStore },
      h(IslandSubSettings, {})
    );
    console.log('rendering');
    render(this.reactNode, this.containerElement.get()[0]);
  }

  // Test method
  toDomElement(): DOM {
    let containerElement = new DOM(this.config.tag, {
      id: this.config.id,
      class: '',
    });
    this.containerElement = containerElement;
    this.reactRender();
    return containerElement;
  }

  configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
    super.configure(player, uimanager);
    console.log('configure', uimanager.getRootStore());
    this.rootStore = uimanager.getRootStore();
    this.reactRender();

    // Reactively subscribe to changes
    let disposer: any = autorun(() => {
      let overlay: OverlayCSS = this.rootStore.overlay;
      let newCss: string[] = [];

      // Debug stuff
      console.log('Updating font size class: ', overlay.fontSizeClass);

      // Fill with data
      newCss.push(overlay.fontSizeClass);
      newCss.push(overlay.fontFamilyClass);
      newCss.push(overlay.fontColorClass);

      // Remove prev, add new
      this.lastUsedCss.forEach((e: string) => {
        this.overlay.getDomElement().removeClass(this.prefixCss(e));
      });
      newCss.forEach((e: string) => {
        this.overlay.getDomElement().addClass(this.prefixCss(e));
      });
      this.lastUsedCss = newCss;
    });

    this.onShow.subscribe(() => {
      this.rootStore.ui.openSubtitleSettingsPanel();
      this.overlay.enablePreviewSubtitleLabel();
    });

    this.onHide.subscribe(() => {
      this.rootStore.ui.closeSubtitleSettingsPanel();
      this.overlay.removePreviewSubtitleLabel();
    });
  }
}
