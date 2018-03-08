import { observable, action, IObservableValue, autorun } from 'mobx';
import { StorageUtils } from '../../storageutils';
import { RootStore } from './root';

export interface SubtitleProps {
  [name: string]: string;
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

export class SubtitleStore implements SubtitleProps {
  [name: string]: any; // So we can iterate
  private root: RootStore;
  private localStorageKey: string;

  private disposer: any; // To remove a listener

  @observable public fontColor: string = 'null';
  @observable public fontOpacity: string = 'null';
  @observable public fontFamily: string = 'null';
  @observable public fontSize: string = 'null';
  @observable public characterEdge: string = 'null';
  @observable public backgroundColor: string = 'null';
  @observable public backgroundOpacity: string = 'null';
  @observable public windowColor: string = 'null';
  @observable public windowOpacity: string = 'null';

  constructor(rootStore: any) {
    this.root = rootStore;
    this.localStorageKey = 'temp-subtitlesettings';

    this.loadSettingsFromLocalStorage();
    // Run on every property change
    this.disposer = autorun(() => {
      this.saveToLocalStorage();
    });

    return this;
  }

  @action
  public reset(): void {
    for (let propertyName of configurableProperties) {
      this[propertyName] = 'null';
    }
  }

  public saveToLocalStorage(): void {
    let toSave: SubtitleProps = {};
    for (let propertyName of configurableProperties) {
      toSave[propertyName] = this[propertyName];
    }
    StorageUtils.setObject(this.localStorageKey, toSave);
  }

  @action
  public loadSettingsFromLocalStorage(): void {
    let cache: SubtitleProps = StorageUtils.getObject<SubtitleProps>(this.localStorageKey) || {};

    // Apply the loaded settings
    for (let propertyName of configurableProperties) {
      this[propertyName] = cache[propertyName];
    }
  }
}
