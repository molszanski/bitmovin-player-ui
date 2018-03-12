import { RootStore } from '../root';
import { SubtitleStore } from '../subtitle';
import { OverlayCSS } from '../overlay';

let root: RootStore = new RootStore();
let overlay: OverlayCSS = root.overlay;

beforeEach(() => {
  root = new RootStore();
  overlay = root.overlay;
});

test('On start overlay css should be null', () => {
  expect(overlay.fontSizeClass).toBe('null');
});

test('Changing fontsize should produce a different class', () => {
  expect(overlay.fontSizeClass).toBe('null');
  root.subtitleStore.fontSize = '100';
  expect(overlay.fontSizeClass).toBe('fontsize-100');
});
