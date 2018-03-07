/// <reference path="../external.d.ts" />
import { h, Component } from 'preact';
import { SelectBox, SelectBoxOption } from '../components/SelectBox';
import { observer, inject } from 'mobx-preact';
import SettingsPanel from '../components/SettingsPanel';
import PanelItem from '../components/PanelItem';
import {
  FontSizeSelectBox,
  FontColorSelectBox,
  FontOpacitySelectBox,
  FontFamilySelectBox,
} from './SubtitleSettings';
// Interfaces
import RootStore from '../stores/root';
import SubtitleStore from '../stores/subtitle';
import { Internalization } from '../stores/i18n';

export interface Props {
  i18n?: Internalization;
}

/**
 * @example ./examples/SubtitleSettingsPanel.md
 */
@inject('i18n')
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
      </SettingsPanel>
    );
  }
}

export { SubtitleSettingsPanel, SubtitleSettingsPanel as default };
