/// <reference path="../external.d.ts" />
import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import { Animate } from '../components/Animate';
import { SubtitleSettingsPanel } from '../containers/SubtitleSettingsPanel';
// Interfaces
import { UiState } from '../stores/ui';

export interface Props {
  ui?: UiState;
  i18n?: any;
}

/**
 * @example ./islandSubtitlePanel.md
 */
@inject('ui')
@observer
class IslandSubSettings extends Component<Props, {}> {
  displayName: string = 'IslandSubSettings';
  render() {
    return (
      <Animate
        duration={500}
        show={this.props.ui.subtitlePanelOpen}
        headless
        fadeOut="bmpui-hidden"
      >
        <SubtitleSettingsPanel />
      </Animate>
    );
  }
}

export { IslandSubSettings, IslandSubSettings as default };
