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
  openSettingsPanel = (): void => {
    this.settingsPanelOpen = true;
  };

  @action
  closeSettingsPanel = (): void => {
    this.settingsPanelOpen = false;
  };

  @action
  openSubtitlePanel = (): void => {
    this.subtitlePanelOpen = true;
  };

  @action
  closeSubtitlePanel = (): void => {
    this.subtitlePanelOpen = false;
  };
}
