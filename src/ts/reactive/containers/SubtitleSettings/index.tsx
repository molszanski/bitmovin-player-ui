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
import { RootStore } from '../../stores/root';
import { SubtitleStore } from '../../stores/subtitle';

interface Props {
  subs: SubtitleStore;
}

const subsInjector = function(target: any) {
  return inject((s: RootStore) => ({
    subs: s.subtitleStore as SubtitleStore,
  }))(observer(target));
};

const subFactory = function(subName: string, defaults: any) {
  return subsInjector(function({ subs }: Props) {
    return (
      <SelectBox
        options={defaults}
        onChange={(e: any) => {
          subs[subName] = e.target.value;
        }}
        value={subs[subName]}
      />
    );
  });
};

const FontSizeSelectBox = subFactory('fontSize', fontSizeOpts);
const FontColorSelectBox = subFactory('fontColor', fontColorOpts);
const FontOpacitySelectBox = subFactory('fontOpacity', fontOpacityOpts);
const FontFamilySelectBox = subFactory('fontFamily', fontFamilyOpts);

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
