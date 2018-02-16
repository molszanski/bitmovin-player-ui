// @ts-ignore
import { connect } from 'unistore/preact';
import { h, Component } from 'preact';
import { subtitleActions } from '../../data/ui';

interface State {}
interface Props {
  setSize: any;
  subs: any;
}

class FontSizeSelectBoxEl extends Component<Props, State> {
  // Quick version to handle changes.
  handleSizeChange(e: any) {
    if (e.target.value === 'null') {
      this.props.setSize(null);
    }
    else {
      this.props.setSize(e.target.value);
    }
  }

  // This null thing should be handled differently. At least
  // we keep this bad null string contained here
  render() {
    let { subs } = this.props;
    if (subs.size === null) {
      subs.size = 'null';
    }

    return (
      <select class='bmpui-ui-selectbox' value={subs.size} onChange={this.handleSizeChange.bind(this)}>
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
}

export const FontSizeSelectBox = connect( function(s: any ) {
  return { subs: s.subs };
}, subtitleActions)(FontSizeSelectBoxEl);
