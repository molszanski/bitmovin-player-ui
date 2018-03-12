import { UiState } from '../ui';

let ui: UiState = {};

beforeEach(() => {
  ui = new UiState();
});

test('Settings panel should be closed', () => {
  expect(ui.settingsPanelOpen).toBe(false);
});

test('We should be abel to open settings', () => {
  expect(ui.settingsPanelOpen).toBe(false);
  ui.openSettingsPanel();
  expect(ui.settingsPanelOpen).toBe(true);
});

test('Settings panel should be closed on new test', () => {
  expect(ui.settingsPanelOpen).toBe(false);
});
