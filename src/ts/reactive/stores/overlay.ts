import { observable, action, computed } from 'mobx';
import { RootStore } from './root';
import { SubtitleStore } from './subtitle';

export class OverlayCSS {
  private root: RootStore;
  private subs: SubtitleStore;

  constructor(rootStore: RootStore) {
    this.root = rootStore;
    this.subs = this.root.subtitleStore;
    return this;
  }

  @computed
  get fontColorClass() {
    if (this.root.subtitleStore.fontColor !== 'null') {
      return `fontcolor-${this.subs.fontColor}${this.subs.fontOpacity}`;
    } else {
      return 'null';
    }
  }

  @computed
  get fontFamilyClass() {
    if (this.subs.fontFamily !== 'null') {
      return `fontfamily-${this.subs.fontFamily}`;
    } else {
      return 'null';
    }
  }

  @computed
  get fontSizeClass() {
    if (this.subs.fontSize !== 'null') {
      return `fontsize-${this.subs.fontSize}`;
    } else {
      return 'null';
    }
  }
}
