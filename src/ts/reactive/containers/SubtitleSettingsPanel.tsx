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
  i18n: Internalization;
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
    let { i18n, ui } = this.props;
    return (
      <SettingsPanel>
        <PanelItem label={`${i18n.q.settings.fontSize}:`}>
          <FontSizeSelectBox />
        </PanelItem>
        <PanelItem label={`${i18n.q.settings.fontColor}:`}>
          <FontColorSelectBox />
        </PanelItem>
        <PanelItem label={`${i18n.q.settings.fontOpacity}:`}>
          <FontOpacitySelectBox />
        </PanelItem>
        <PanelItem label={`${i18n.q.settings.fontFamily}:`}>
          <FontFamilySelectBox />
        </PanelItem>

        <PanelItem classes="bmpui-last">
          <Button
            label={i18n.q.labels.back}
            classes="bmpui-ui-subtitlesettingsclosebutton"
            onClick={() => this.props.ui.closeSubtitlePanel()}
          />
          <Button
            label={i18n.q.labels.reset}
            classes="bmpui-ui-subtitlesettingsresetbutton"
            onClick={() => this.props.subtitleStore.reset()}
          />

        </PanelItem>
      </SettingsPanel>
    );
  }
}

export { SubtitleSettingsPanel, SubtitleSettingsPanel as default };
