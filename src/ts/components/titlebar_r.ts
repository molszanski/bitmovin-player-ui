import {Container, ContainerConfig} from './container';
import {UIInstanceManager} from '../uimanager';
import {DOM} from '../dom';
import { h, render } from 'preact';
import {TitleBar} from './titlebar-el';
 // @ts-ignore
import { Provider, connect } from 'unistore/preact';
import { store as metadataStore, updateStore } from '../data/meta';
/**
 * Configuration interface for a {@link TitleBar}.
 */
export interface TitleBarConfig extends ContainerConfig {
  /**
   * Specifies if the title bar should stay hidden when no metadata label contains any text. Does not make a lot
   * of sense if the title bar contains other components than just MetadataLabels (like in the default configuration).
   * Default: false
   */
  keepHiddenWithoutMetadata?: boolean;
}

/**
 * Displays a title bar containing a label with the title of the video.
 */
export class TitleBarReact extends Container<TitleBarConfig> {

  constructor(config: TitleBarConfig = {}) {
    super(config);

    this.config = this.mergeConfig( config, {
      cssClass: this.prefixCss('ui-titlebar'),
      hidden: true,
      keepHiddenWithoutMetadata: false,
    }, <TitleBarConfig>this.config);
  }


  // Test method
  toDomElement(): DOM {
    let containerElement = new DOM(this.config.tag, {
      'id': this.config.id,
      'class': this.config.cssClass,
    });

    let withProvider = h(Provider, { store: metadataStore },
      h( TitleBar, { className: this.prefixCss('container-wrapper') })
    );
    render(withProvider, containerElement.get()[0]);
    return containerElement;

  }
  public release() {
    console.log('release called!');
  }

  // Extract title and description from the env and store it into redux
  extractMetadata(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
    let uiconfig = uimanager.getConfig();

    // Copypaste from label
    if (uiconfig && uiconfig.metadata && uiconfig.metadata.title) {
      updateStore({title: uiconfig.metadata.title});
    } else if (player.getConfig().source && player.getConfig().source.title) {
      updateStore({title: player.getConfig().source.title});
    }

    // Copypaste from label
    if (uiconfig && uiconfig.metadata && uiconfig.metadata.description) {
      updateStore({description: uiconfig.metadata.description});
    } else if (player.getConfig().source && player.getConfig().source.description) {
      updateStore({description: player.getConfig().source.description});
    }

  }

  configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
    super.configure(player, uimanager);
    this.extractMetadata(player, uimanager);

    let metadataStoreState = metadataStore.getState();
    let config = <TitleBarConfig>this.getConfig();
    let shouldBeShown = !this.isHidden();
    let hasMetadataText = metadataStoreState.defined; // Flag to track if any metadata label contains text

    let checkMetadataTextAndUpdateVisibility = () => {
      if (this.isShown()) {
        // Hide a visible titlebar if it does not contain any text and the hidden flag is set
        if (config.keepHiddenWithoutMetadata && !hasMetadataText) {
          this.hide();
        }
      } else if (shouldBeShown) {
        // Show a hidden titlebar if it should actually be shown
        this.show();
      }
    };

    // Listen to text change events to update the hasMetadataText flag when the metadata dynamically changes
    metadataStore.subscribe(checkMetadataTextAndUpdateVisibility);

    uimanager.onControlsShow.subscribe(() => {
      shouldBeShown = true;
      if (!(config.keepHiddenWithoutMetadata && !hasMetadataText)) {
        this.show();
      }
    });
    uimanager.onControlsHide.subscribe(() => {
      shouldBeShown = false;
      this.hide();
    });

    // init
    checkMetadataTextAndUpdateVisibility();
  }
}
