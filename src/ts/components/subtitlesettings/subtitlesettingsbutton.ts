import {Button, ButtonConfig} from '../button';
import {SettingsPanel} from '../settingspanel';
import {SubtitleSettingsPanel} from './subtitlesettingspanel';
import {SubtitleSettingsPanel as el} from './subtitlesettingspanel-react';


export interface SubtitleSettingsButtonConfig extends ButtonConfig {
  subtitleSettingsPanel: SubtitleSettingsPanel | el;
  settingsPanel: SettingsPanel;
}

export class SubtitleSettingsButton extends Button<ButtonConfig> {

  protected subtitleSettingsPanel: SubtitleSettingsPanel | el;
  protected settingsPanel: SettingsPanel;

  constructor(config: SubtitleSettingsButtonConfig) {
    super(config);

    this.subtitleSettingsPanel = config.subtitleSettingsPanel;
    this.settingsPanel = config.settingsPanel;
  }
}
