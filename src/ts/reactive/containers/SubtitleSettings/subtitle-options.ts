import { SelectBoxOption } from '../../components/SelectBox';

const optionPusher = function(a: Array<SelectBoxOption>, v: any, l: string) {
  let o: SelectBoxOption = {
    value: v,
    label: l,
  };
  a.push(o);
};

export const fontSizeOpts: Array<SelectBoxOption> = [];
optionPusher(fontSizeOpts, null, 'default');
optionPusher(fontSizeOpts, 50, '50%');
optionPusher(fontSizeOpts, 75, '75%');
optionPusher(fontSizeOpts, 100, '100%');
optionPusher(fontSizeOpts, 150, '150%');
optionPusher(fontSizeOpts, 200, '200%');
optionPusher(fontSizeOpts, 300, '300%');
optionPusher(fontSizeOpts, 400, '400%');

export const fontColorOpts: Array<SelectBoxOption> = [];
optionPusher(fontColorOpts, null, 'default');
optionPusher(fontColorOpts, 'white', 'white');
optionPusher(fontColorOpts, 'black', 'black');
optionPusher(fontColorOpts, 'red', 'red');
optionPusher(fontColorOpts, 'green', 'green');
optionPusher(fontColorOpts, 'blue', 'blue');
optionPusher(fontColorOpts, 'cyan', 'cyan');
optionPusher(fontColorOpts, 'yellow', 'yellow');
optionPusher(fontColorOpts, 'magenta', 'magenta');

export const fontOpacityOpts: Array<SelectBoxOption> = [];
optionPusher(fontOpacityOpts, null, 'default');
optionPusher(fontOpacityOpts, '100', '100%');
optionPusher(fontOpacityOpts, '75', '75%');
optionPusher(fontOpacityOpts, '50', '50%');
optionPusher(fontOpacityOpts, '25', '25%');

export const fontFamilyOpts: Array<SelectBoxOption> = [];
optionPusher(fontFamilyOpts, null, 'default');
optionPusher(fontFamilyOpts, 'monospacedserif', 'monospaced serif');
optionPusher(fontFamilyOpts, 'proportionalserif', 'proportional serif');
optionPusher(fontFamilyOpts, 'monospacedsansserif', 'monospaced sans serif');
optionPusher(fontFamilyOpts, 'proportionalsansserif', 'proportional sans serif');
optionPusher(fontFamilyOpts, 'casual', 'casual');
optionPusher(fontFamilyOpts, 'cursive', 'cursive');
optionPusher(fontFamilyOpts, 'smallcapital', 'small capital');
