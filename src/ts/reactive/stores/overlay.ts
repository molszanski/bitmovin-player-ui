import { observable, action, computed } from 'mobx';
import { RootStore } from './root';

export class OverlayCSS {
  private root: RootStore;

  constructor(rootStore: RootStore) {
    this.root = rootStore;
    return this;
  }

  @computed
  get fontSizeClass() {

    if (this.root.subtitleStore.fontSize !== 'null') {
      return `fontsize-${this.root.subtitleStore.fontSize}`;
    } else {
      return 'null';
    }
  }
}
