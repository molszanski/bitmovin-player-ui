import { SettingsPanel, SettingsPanelConfig } from '../settingspanel';
import { SubtitleOverlay } from '../subtitleoverlay';
import { UIInstanceManager } from '../../uimanager';
import { DOM } from '../../dom';
import { h, render, VNode } from 'preact';
import { RootStore } from '../../reactive/stores/root';
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
    // uimanager.getRootStore()
    // uimanager.getRootStore();
    // uimana
    // Need to move this model to a sep. instance
    // Handle css overlayChanges. Again, prototype only
    // uiStore.subscribe((state: any) => {
    //   let subs = state.subs;
    //   let newCss: string[] = [];

    //   // Fill with data
    //   if (subs.size !== null) {
    //     newCss.push(`fontsize-${subs.size}`);
    //   }

    //   // Remove prev, add new
    //   this.lastUsedCss.forEach((e: string) => {
    //     this.overlay.getDomElement().removeClass(e);
    //   });
    //   newCss.forEach((e: string) => {
    //     this.overlay.getDomElement().addClass(this.prefixCss(e));
    //   });
    //   this.lastUsedCss = newCss;
    // });

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
