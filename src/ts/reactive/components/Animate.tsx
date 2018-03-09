import { h, Component, cloneElement } from 'preact';
import * as classnames from 'classnames';
import { Timeout } from '../../timeout';

export interface Props {
  /** Duration on hiding before unmounting */
  duration: number;

  /** Show/hide toggle */
  show: boolean;

  /** Render and animate on initil render */
  displayOnMount?: boolean;

  /** Not implemented: Will render element instantly bypassing animation cycle */
  skipAnitialAnimation?: boolean;

  /**
   * Do not wrap an element in a div, just pass props to children who can handle it.
   * It will pass css string as a classes prop
   */
  headless?: boolean;

  /** Fade in css name to apply */
  fadeIn?: string;
  /** Fade out css name to apply */
  fadeOut?: string;
}
export interface State {
  display: boolean;
}

export const defaultState = {
  display: false,
};

/**
 * @example ./examples/Animate.md
 */
class Animate extends Component<Props, State> {
  displayName = 'Animate';
  hideTimeout: Timeout;
  constructor(props: Props) {
    super(props);
    this.state = defaultState;

    // Force show on start
    if (props.displayOnMount === true || props.show === true) {
      this.state.display = true;
    }

    // Configure timeout
    this.hideTimeout = new Timeout(props.duration, () => {
      this.setState({ display: false });
    });
  }
  componentWillReceiveProps(nextProps: Props) {
    // Avoid removing / animating on mouseenter/leave events
    if (nextProps.show === true) {
      this.hideTimeout.clear();
    }
    // Switchin on
    if (this.state.display === false && nextProps.show === true) {
      this.setState({ display: true });
    }
    // Switchin off
    if (this.state.display === true && nextProps.show === false) {
      this.hideTimeout.start();
    }
  }
  render() {
    // ({ [`btn-${buttonType}`]: true })
    let ui = classnames({
      [this.props.fadeOut || 'fade-out']: !this.props.show,
      [this.props.fadeIn || 'fade-in']: this.props.show,
    });

    // Render normally
    if (this.props.headless !== true) {
      return (
        <div className={ui}>
          {// Do not render it is not needed
          this.state.display && this.props.children}
        </div>
      );
    } else {
      // Pass props down the chain
      if (this.state.display === true) {
        let child = this.props.children[0];
        child.attributes.classes = classnames(child.attributes.classes, ui);
        return cloneElement(child, child.attributes);
      } else {
        return null;
      }
    }
  }
}

export { Animate, Animate as default };
