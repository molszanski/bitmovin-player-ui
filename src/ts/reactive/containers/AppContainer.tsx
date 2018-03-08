/// <reference path="../external.d.ts" />
import { h, Component } from 'preact';
import { SelectBox, SelectBoxOption } from '../components/SelectBox';
import { observer, Provider } from 'mobx-preact';
import { RootStore } from '../stores/root';

/**
 * @example ./examples/AppContainer.md
 */
@observer
class AppContainer extends Component<{}, {}> {
  displayName: 'AppContainer';
  public rootStore: RootStore;

  constructor(props: any, context: any) {
    super(props, context);
    this.rootStore = new RootStore();
  }
  render() {
    return (
      <Provider
        subtitleStore={this.rootStore.subtitleStore}
        i18n={this.rootStore.i18nStore}
        ui={this.rootStore.ui}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { AppContainer, AppContainer as default };
