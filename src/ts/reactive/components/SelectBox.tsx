import { h, Component } from 'preact';

export interface SelectBoxOption {
  value: string;
  label: string;
}

export interface Props {
  options: Array<SelectBoxOption>;
  onChange?(): void;
}

/**
 * @example ./examples/SelectBox.md
 */
class SelectBox extends Component<Props, {}> {
  displayName: 'SelectBox';
  render() {
    return (
      <select
        className="bmpui-ui-selectbox"
        onChange={this.props.onChange || undefined}
      >
        {this.props.options.map((o: SelectBoxOption, i: number) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  }
}

export { SelectBox, SelectBox as default };
