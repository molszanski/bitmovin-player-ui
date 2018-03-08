import { SubtitleStore } from './subtitle';
import { Internalization } from './i18n';
import { UiState } from './ui';

export class RootStore {
  public subtitleStore: SubtitleStore;
  public i18nStore: Internalization;
  public ui: UiState;

  constructor() {
    this.i18nStore = new Internalization(this);
    this.subtitleStore = new SubtitleStore(this);
    this.ui = new UiState(this);
    return this;
  }
}
