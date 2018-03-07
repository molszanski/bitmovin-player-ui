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
      <div className="bmpui-ui-settings-panel-item">
        <div className="bmpui-container-wrapper">
          <span className="bmpui-ui-label">{this.props.label}</span>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { PanelItem, PanelItem as default };
