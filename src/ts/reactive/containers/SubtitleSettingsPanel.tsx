/// <reference path="../external.d.ts" />
import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import * as classnames from 'classnames';
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
  classes?: string | [string];
}

/**
 * @example ./examples/SubtitleSettingsPanel.md
 */
@inject('i18n', 'ui', 'subtitleStore')
@observer
class SubtitleSettingsPanel extends Component<Props, {}> {
  displayName: string = 'SubtitleSettingsPanel';
  constructor(props: Props) {
    super(props);
  }
  render() {
    // Make compiler happy with runtime assertions
    this.props.i18n!;
    this.props.ui!;
    this.props.subtitleStore!;

    let { i18n, ui, subtitleStore } = this.props;
    let cx = classnames(this.props.classes);
    return (
      <SettingsPanel classes={cx}>
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
            onClick={() => ui.closeSubtitleSettingsPanel()}
          />
          <Button
            label={i18n.q.labels.reset}
            classes="bmpui-ui-subtitlesettingsresetbutton"
            onClick={() => subtitleStore.reset()}
          />
        </PanelItem>
      </SettingsPanel>
    );
  }
}

export { SubtitleSettingsPanel, SubtitleSettingsPanel as default };
