import { SubtitleStore } from './subtitle';
import { Internalization } from './i18n';

export class RootStore {
  public subtitleStore: SubtitleStore;
  public i18nStore: Internalization;

  constructor() {
    this.i18nStore = new Internalization(this);
    this.subtitleStore = new SubtitleStore(this);
    console.log(this);
    // @ts-ignore
    window.rootStore = this;
    return this;
  }
}
