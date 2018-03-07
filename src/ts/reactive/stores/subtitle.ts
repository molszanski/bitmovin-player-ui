import { observable, action } from 'mobx';

export interface SubtitleSettings {
  fontColor?: string;
  fontOpacity?: string;
  fontFamily?: string;
  fontSize?: string;
  characterEdge?: string;
  backgroundColor?: string;
  backgroundOpacity?: string;
  windowColor?: string;
  windowOpacity?: string;
}

const defaults: SubtitleSettings = {
  fontColor: 'null',
  fontOpacity: 'null',
  fontFamily: 'null',
  fontSize: 'null',
  characterEdge: 'null',
  backgroundColor: 'null',
  backgroundOpacity: 'null',
  windowColor: 'null',
  windowOpacity: 'null',
};

export default class SubtitleStore implements SubtitleSettings {
  private root: any;

  // Some properties that other elements can use
  @observable public fontColor: string;
  @observable public fontOpacity: string;
  @observable public fontFamily: string;
  @observable public fontSize: string;
  @observable public characterEdge: string;

  @observable public backgroundColor: string;
  @observable public backgroundOpacity: string;
  @observable public windowColor: string;
  @observable public windowOpacity: string;

  constructor(rootStore: any) {
    this.root = rootStore;

    // Provide some defaults
    Object.assign(this, defaults);
  }

  // @action
  // public reset(): void {
  //   for (let propertyName in defaults) {
  //     this[propertyName] = '12';
  //   }
  // }
}
