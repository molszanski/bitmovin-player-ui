import { h, Component } from 'preact';

export interface Props {
  text?: string;
}

/**
 * @example ./examples/SettingsPanel.md
 */
class SettingsPanel extends Component<Props, {}> {
  displayName: "SettingsPanel";
  render() {
    return (
      <div className="ui-settings-panel">
        <div className="container-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { SettingsPanel, SettingsPanel as default };
