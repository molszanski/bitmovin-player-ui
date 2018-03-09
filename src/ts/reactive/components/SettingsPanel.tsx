import { h, Component } from 'preact';
import { classnames } from '../utils';

export interface Props {
  text?: string;
  classes?: string;
}

/**
 * @example ./examples/SettingsPanel.md
 */
class SettingsPanel extends Component<Props, {}> {
  displayName: "SettingsPanel";
  render() {
    let cx = classnames('bmpui-ui-settings-panel', this.props.classes);
    return (
      <div className={cx}>
        <div className="bmpui-container-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { SettingsPanel, SettingsPanel as default };
