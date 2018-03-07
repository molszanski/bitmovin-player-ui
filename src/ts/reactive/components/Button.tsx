import { h, Component } from 'preact';
import { Label } from './Label';

/**
 * @example ./examples/Button.md
 */
class Button extends Component<{ label: string; onClick?: any }, {}> {
  displayName: 'Button';
  render() {
    return (
      <button
        type="button"
        className="bmpui-ui-button"
        onClick={this.props.onClick}
      >
        <Label content={this.props.label} />
      </button>
    );
  }
}

export { Button, Button as default };
