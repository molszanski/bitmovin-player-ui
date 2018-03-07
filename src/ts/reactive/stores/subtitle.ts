import { observable } from "mobx";

export default class SubtitleStore {
  private root: any;

  // Some properties that other elements can use
  @observable public fontSize: string | number;
  @observable public fontColor: string;
  @observable public fontFamily: string;
  @observable public fontOpacity: any;

  @observable public backgroundColor: string;
  @observable public backgroundOpacity: string;

  constructor(rootStore: any) {
    this.root = rootStore;

    // Provide some defaults
    this.fontSize = 15;
    this.fontOpacity = null;
  }
}
