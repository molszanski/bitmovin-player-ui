import { h, Component } from 'preact';
// @ts-ignore
import { connect } from 'unistore/preact';
import { UiState } from '../../data/ui';
import { FontSizeSelectBox } from './fontsizeselectbox-el';


function PanelItem({ label, wrapperCssClass }: any) {
  return (
    <div class='bmpui-ui-settings-panel-item'>
      <div className={wrapperCssClass}>
        <span class='bmpui-ui-label'>{label}</span>
        {this.props.children}
      </div>
    </div>
  );
}
function DummySelect() {
  return(
    <select class='bmpui-ui-selectbox'>
      <option value='null'>default</option>
      <option value='50'>50%</option>
      <option value='75'>75%</option>
      <option value='100'>100%</option>
      <option value='150'>150%</option>
      <option value='200'>200%</option>
      <option value='300'>300%</option>
      <option value='400'>400%</option>
    </select>
  );
}

interface State {}
interface Props {
  text?: string;
  className: string;
  ui: UiState;
}


class SubtitleSettingsElementReactEl extends Component<Props, State> {

  render() {
    let { className, ui } = this.props;

    // Don't waste RAM and render time
    if (ui.panelOpen === true) {
      return (
        <div className={className}>

          <PanelItem label='Font Size' wrapperCssClass={className}>
            <FontSizeSelectBox/>
          </PanelItem>
          <PanelItem label='Dummy #1' wrapperCssClass={className}><DummySelect/></PanelItem>
          <PanelItem label='Dummy #2' wrapperCssClass={className}><DummySelect/></PanelItem>
          <PanelItem label='Dummy #3' wrapperCssClass={className}><DummySelect/></PanelItem>
          <PanelItem label='Dummy #4' wrapperCssClass={className}><DummySelect/></PanelItem>
          <PanelItem label='Dummy #5' wrapperCssClass={className}><DummySelect/></PanelItem>
          <PanelItem label='Dummy #6' wrapperCssClass={className}><DummySelect/></PanelItem>
          <PanelItem label='Dummy #7' wrapperCssClass={className}><DummySelect/></PanelItem>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export const SubtitleSettingsElementReact = connect( (state: any ) => {
  return { ui: state };
})(SubtitleSettingsElementReactEl);

