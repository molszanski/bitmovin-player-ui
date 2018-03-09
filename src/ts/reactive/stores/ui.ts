import { observable, action } from 'mobx';
import { RootStore } from './root';

export class UiState {
  private root: RootStore;

  @observable public settingsPanelOpen: boolean = false;
  @observable public subtitlePanelOpen: boolean = false;

  constructor(rootStore: RootStore) {
    this.root = rootStore;
    return this;
  }

  @action
  public openSettingsPanel(): void {
    this.settingsPanelOpen = true;
  }

  @action
  public closeSettingsPanel(): void {
    this.settingsPanelOpen = false;
  }

  @action
  public openSubtitleSettingsPanel(): void {
    this.subtitlePanelOpen = true;
  }

  @action
  public closeSubtitleSettingsPanel(): void {
    this.subtitlePanelOpen = false;
  }

  @action
  public togglSubs(): void {
    this.subtitlePanelOpen = !this.subtitlePanelOpen;
  }

}
