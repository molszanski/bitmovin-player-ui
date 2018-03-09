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
@inject('ui', 'i18n')
@observer
class IslandSubSettings extends Component<Props, {}> {
  displayName: string = 'IslandSubSettings';
  render() {
    // <Animate duration={1000} show={state.show}>
    let { ui } = this.props;
    console.log('island this: ', this);

    return (
      <Animate duration={50000} show={ui.subtitlePanelOpen} headless fadeOut='bmpui-hidden'>
        <SubtitleSettingsPanel />
      </Animate>
    );
  }
}

export { IslandSubSettings, IslandSubSettings as default };

// * <Animate duration={500} show={ui.subtitlePanelOpen}>
// </Animate>
