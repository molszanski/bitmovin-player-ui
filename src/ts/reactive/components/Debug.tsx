import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import * as classnames from 'classnames';
// require('preact/debug');
// Types and interfaces
import { RootStore } from '../stores/root';
import { SubtitleStore } from '../stores/subtitle';
import { Internalization } from '../stores/i18n';
import { UiState } from '../stores/ui';

export class MiniFrame extends Component<{}, {}> {
  displayName: 'MiniFrame';
  render() {
    return (
      <div className="debug">
        <div className="mini-frame">
          <div className="bmpui-ui-uicontainer bmpui-ui-skin-modern ">
            <div className="bmpui-ui-container-wrapper">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class PlayerFrame extends Component<{}, {}> {
  displayName: 'PlayerFrame';
  render() {
    return (
      <div className="debug">
        <div className="frame carbon">
          <div className="bmpui-ui-uicontainer bmpui-ui-skin-modern">
            <div className="bmpui-ui-container-wrapper">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export interface ClassNameProps {
  classes?: string;
}
export class ModernFrame extends Component<ClassNameProps, {}> {
  displayName: 'ModernFrame';
  render() {
    return (
      <div className="debug ">
        <div
          className={classnames('bmpui-ui-skin-modern ', this.props.classes)}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export interface Props {
  subs?: SubtitleStore;
}

@inject((s: RootStore) => ({
  subs: s.subtitleStore,
}))
@observer
export class SubtitleSettings extends Component<Props, {}> {
  displayName: 'SubtitleSettings';
  render() {
    let subs = this.props.subs!;
    return (
      <div className="debug">
        <div className="subtitle-debug-footer">
          <div>Size: {JSON.stringify(subs.fontSize)} </div>
          <div>Color: {JSON.stringify(subs.fontColor)} </div>
          <div>Opacity: {JSON.stringify(subs.fontOpacity)} </div>
        </div>
      </div>
    );
  }
}
@inject('i18n')
@observer
export class LanguageChanger extends Component<{ i18n?: Internalization }, {}> {
  displayName: 'LanguageChanger';
  render() {
    let i18n = this.props.i18n!;
    return (
      <div className="debug">
        <div className="language-changer">
          <div className="btn" onClick={() => i18n.changeToGerman()}>
            To German
          </div>
          <div className="btn" onClick={() => i18n.changeToEnglish()}>
            To English
          </div>
          <span>Lng: {i18n.q.language}</span>
          <div>
            Sample message: <pre>{i18n.q.messages.connectingTo('Mars')}</pre>
          </div>
        </div>
      </div>
    );
  }
}

@inject('ui')
@observer
export class PanelControls extends Component<{ ui?: UiState }, {}> {
  displayName: string = 'PanelControls';
  render() {
    let ui = this.props.ui!;
    return (
      <div className="debug">
        <div className="panel-controls">
          <div className="btn" onClick={() => ui.openSubtitleSettingsPanel()}>
            Open Subs Panel
          </div>
          <div className="btn" onClick={() => ui.closeSubtitleSettingsPanel()}>
            Close Subs Panel
          </div>
          <div className="btn" onClick={() => ui.togglSubs()}>
            Toggle
          </div>
        </div>
      </div>
    );
  }
}

export function DummySelect() {
  return (
    <select className="bmpui-ui-selectbox">
      <option value="null">default</option>
      <option value="50">50%</option>
      <option value="75">75%</option>
      <option value="400">400%</option>
    </select>
  );
}
