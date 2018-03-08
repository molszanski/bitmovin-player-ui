/// <reference path="../external.d.ts" />
import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import {
  FontSizeSelectBox,
  FontColorSelectBox,
  FontOpacitySelectBox,
  FontFamilySelectBox,
} from './SubtitleSettings';
import { SelectBox, SelectBoxOption } from '../components/SelectBox';
import { Button } from '../components/Button';
import SettingsPanel from '../components/SettingsPanel';
import PanelItem from '../components/PanelItem';
// Interfaces
import { RootStore } from '../stores/root';
import { SubtitleStore } from '../stores/subtitle';
import { Internalization } from '../stores/i18n';
import { UiState } from '../stores/ui';

export interface Props {
  i18n?: Internalization;
  ui?: UiState;
  subtitleStore?: SubtitleStore;
}

/**
 * @example ./examples/SubtitleSettingsPanel.md
 */
@inject('i18n', 'ui', 'subtitleStore')
@observer
class SubtitleSettingsPanel extends Component<Props, {}> {
  displayName: 'SubtitleSettingsPanel';
  render() {
    let i18nFonts = this.props.i18n!.q.settings.fonts;
    return (
      <SettingsPanel>
        <PanelItem label={`${i18nFonts.fontSize}:`}>
          <FontSizeSelectBox />
        </PanelItem>
        <PanelItem label={`${i18nFonts.fontColor}:`}>
          <FontColorSelectBox />
        </PanelItem>
        <PanelItem label={`${i18nFonts.fontOpacity}:`}>
          <FontOpacitySelectBox />
        </PanelItem>
        <PanelItem label={`${i18nFonts.fontFamily}:`}>
          <FontFamilySelectBox />
        </PanelItem>

        <PanelItem classes="bmpui-last">
          <Button
            label="Back"
            classes="bmpui-ui-subtitlesettingsclosebutton"
            onClick={() => this.props.ui.closeSubtitlePanel()}
          />
          <Button
            label="Reset"
            classes="bmpui-ui-subtitlesettingsresetbutton"
            onClick={() => this.props.subtitleStore.reset()}
          />
        </PanelItem>
      </SettingsPanel>
    );
  }
}

export { SubtitleSettingsPanel, SubtitleSettingsPanel as default };
