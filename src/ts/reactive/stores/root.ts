import { SubtitleStore } from './subtitle';
import { Internalization } from './i18n';
import { UiState } from './ui';
import { OverlayCSS } from './overlay';

export class RootStore {
  public subtitleStore: SubtitleStore;
  public i18nStore: Internalization;
  public ui: UiState;
  public overlay: OverlayCSS;

  constructor() {
    this.i18nStore = new Internalization(this);
    this.subtitleStore = new SubtitleStore(this);
    this.ui = new UiState(this);
    this.overlay = new OverlayCSS(this);
    return this;
  }
}
