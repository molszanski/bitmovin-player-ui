import { observable, action, IObservableValue } from 'mobx';
import { StorageUtils } from '../../storageutils';
import { RootStore } from './root';

export interface SubtitleSettings {
  fontColor: string;
  fontOpacity: string;
  fontFamily: string;
  fontSize: string;
  characterEdge: string;
  backgroundColor: string;
  backgroundOpacity: string;
  windowColor: string;
  windowOpacity: string;
}

const configurableProperties = [
  'fontColor',
  'fontOpacity',
  'fontFamily',
  'fontSize',
  'characterEdge',
  'backgroundColor',
  'backgroundOpacity',
  'windowColor',
  'windowOpacity',
];

export interface Properties extends SubtitleSettings {
  [name: string]: string;
}

export class SubtitleStore implements SubtitleSettings {
  [name: string]: any; // So we can iterate
  private root: RootStore;
  private localStorageKey: string;
  private userSettings: SubtitleSettings;

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
    this.localStorageKey = 'temp-subtitlesettings';

    // Provide some defaults
    for (let propertyName of configurableProperties) {
      this[propertyName] = observable.box('null');
    }
    return this;
  }

  // @action
  // public reset(): void {
  //   for (let propertyName of SubtitleProperties) {
  //     this[propertyName] = 'null';
  //   }
  // }

  // public saveToLocalStorage(): void {
  //   StorageUtils.setObject(this.localStorageKey, this.userSettings);
  // }

  // public loadSettingsFromLocalStorage(): void {
  //   this.userSettings = StorageUtils.getObject<SubtitleSettings>(this.localStorageKey) || {};

  //   // Apply the loaded settings
  //   for (let property in this.userSettings) {
  //     this._properties[property].value = (<any>this.userSettings)[property];
  //   }
  // }
}
