/// <reference path="../../external.d.ts" />
import { h, Component } from 'preact';
import { SelectBox } from '../../components/SelectBox';
import { observer, inject } from 'mobx-preact';
import {
  fontSizeOpts,
  fontColorOpts,
  fontOpacityOpts,
  fontFamilyOpts,
} from './subtitle-options';
// Types and Interfaces
import RootStore from '../../stores/root';
import SubtitleStore from '../../stores/subtitle';

interface Props {
  subs: SubtitleStore;
}

const subsInjector = function(target: any) {
  return inject((s: RootStore) => ({
    subs: s.subtitleStore as SubtitleStore,
  }))(observer(target));
};

const FontSizeSelectBox = subsInjector(function({ subs }: Props) {
  return (
    <SelectBox
      // @ts-ignore
      options={fontSizeOpts}
      onChange={(e: any) => {
        console.log(subs);
        subs.fontSize = e.target.value;
      }}
    />
  );
});

const FontColorSelectBox = subsInjector(function({ subs }: Props) {
  return (
    <SelectBox
      // @ts-ignore
      options={fontColorOpts}
      onChange={(e: any) => {
        subs.fontColor = e.target.value;
      }}
    />
  );
});

const FontOpacitySelectBox = subsInjector(function({ subs }: Props) {
  return (
    <SelectBox
      // @ts-ignore
      options={fontOpacityOpts}
      onChange={(e: any) => {
        subs.fontOpacity = e.target.value;
      }}
    />
  );
});

const FontFamilySelectBox = subsInjector(function({ subs }: Props) {
  return (
    <SelectBox
      // @ts-ignore
      options={fontFamilyOpts}
      onChange={(e: any) => {
        subs.fontFamily = e.target.value;
      }}
    />
  );
});

/**
 * @example ../examples/SubtitleSettings.md
 */
class SubtitleSettings extends Component<{}, {}> {
  displayName: 'SubtitleSettings';
  render(): null {
    return null;
  }
}

export {
  FontSizeSelectBox,
  FontColorSelectBox,
  FontOpacitySelectBox,
  FontFamilySelectBox,
  SubtitleSettings as default,
};
