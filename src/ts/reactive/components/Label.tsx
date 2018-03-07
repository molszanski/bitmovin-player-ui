import { h, Component } from 'preact';

/**
 * @example ./examples/Label.md
 */
class Label extends Component<{ content?: string }, {}> {
  displayName: 'Label';
  render() {
    return (
      <span style={{ display: 'inline-block' }} className="bmpui-label">
        {this.props.content || this.props.children}
      </span>
    );
  }
}

export { Label, Label as default };
