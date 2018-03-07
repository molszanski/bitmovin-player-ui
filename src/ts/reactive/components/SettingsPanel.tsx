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
      <div className="bmpui-ui-settings-panel">
        <div className="bmpui-container-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { SettingsPanel, SettingsPanel as default };
