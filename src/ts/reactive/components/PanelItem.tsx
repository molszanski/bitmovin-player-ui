import { h, Component } from 'preact';
import { classnames } from '../utils';

export interface Props {
  label?: string;
  classes?: [string] | string;
}

/**
 * @example ./examples/PanelItem.md
 */
class PanelItem extends Component<Props, {}> {
  displayName: 'PanelItem';
  render() {
    let allNames: string = classnames(
      'bmpui-ui-settings-panel-item',
      this.props.classes
    );
    return (
      <div className={allNames}>
        <div className="bmpui-container-wrapper">
          {this.props.label && (
            <span className="bmpui-ui-label">{this.props.label}</span>
          )}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { PanelItem, PanelItem as default };
