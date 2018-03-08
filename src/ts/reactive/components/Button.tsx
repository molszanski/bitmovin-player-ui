import { h, Component } from 'preact';
import { Label } from './Label';
import * as classnames from 'classnames';

export interface Props {
  classes?: [string] | string;
  label: string;
  onClick?(event: any): void;
}

/**
 * @example ./examples/Button.md
 */
class Button extends Component<Props, {}> {
  displayName: 'Button';
  render() {
    return (
      <button
        type="button"
        className={classnames('bmpui-ui-button', this.props.classes)}
        onClick={this.props.onClick}
      >
        <Label content={this.props.label} />
      </button>
    );
  }
}

export { Button, Button as default };
