import { h, Component } from 'preact';

export interface Props {
  label: string;
}

/**
 * @example ./examples/PanelItem.md
 */
class PanelItem extends Component<Props, {}> {
  displayName: "PanelItem";
  render() {
    return (
      <div className="ui-settings-panel-item">
        <div className="container-wrapper">
          <span className="ui-label">{this.props.label}</span>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { PanelItem, PanelItem as default };
