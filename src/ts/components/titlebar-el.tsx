import { h, Component } from 'preact';
// @ts-ignore
import { connect } from 'unistore/preact';

export interface Props {
  text: string;
  className: string;
  meta: any;
}

export interface State {
  show: boolean;
}

/*
  Ids are not shown here obviously we can pass id generator function if needed
  per element.
*/
class TitleBar extends Component<Props, State> {
  state: State = {
    show: false,
  };
  render() {
    let { className, meta } = this.props;
    if (meta.defined) {
      return (
        <div className={className}>
          <span className='bmpui-ui-label bmpui-label-metadata bmpui-label-metadata-title'>
            { meta.title }
          </span>
          <span className='bmpui-ui-label bmpui-label-metadata bmpui-label-metadata-description'>
            { meta.description }
          </span>
        </div>
      );
    }
    else {
      return null;
    }
  }
}


let connected = connect( (state: any ) => {
  return {
    meta: state,
  };
})(TitleBar);
export {
  connected as TitleBar,
};