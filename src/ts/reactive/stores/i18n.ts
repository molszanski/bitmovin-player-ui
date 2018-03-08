import { observable, action } from 'mobx';
import { RootStore } from './root';
import { Translation, Settings, Labels } from './translations/types';
import { en } from './translations/en';
import { de } from './translations/de';

export class NewTranslation implements Translation {
  public language: string;
  public settings: Settings;
  public labels: Labels;

  constructor(translation: Translation) {
    Object.assign(this, translation);
  }
}

export class Internalization {
  private root: RootStore;

  // Some properties that other elements can use
  public language: string;
  @observable public q: NewTranslation;

  constructor(rootStore: RootStore) {
    this.root = rootStore;
    this.q = new NewTranslation(en);
    return this;
  }

  changeTo2() {
    this.q = new NewTranslation(de);
  }

  @action
  public changeToGerman() {
    this.q = new NewTranslation(de);
  }
  @action
  public changeToEnglish() {
    this.q = new NewTranslation(en);
  }
}
