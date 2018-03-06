import { h, Component } from 'preact';

export interface Props {
  title: string;
  description?: string;
}

/**
 * @example ./examples/TitleBar.md
 */
class TitleBar extends Component<Props, {}> {
  displayName: "TitleBar";
  render() {
    let { title, description } = this.props;
    return (
      <div className="bmpui-ui-titlebar">
        <div className="bmpui-container-wrapper">
          <span className="bmpui-ui-label bmpui-label-metadata bmpui-label-metadata-title">{title}</span>
          <span className="bmpui-ui-label bmpui-label-metadata bmpui-label-metadata-description">{description}</span>
        </div>
      </div>
    );
  }
}

export { TitleBar, TitleBar as default };
