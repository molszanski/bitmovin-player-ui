### Full Panel:

Ready to use panel with `i18n` support!

```jsx
const AppContainer = require('../AppContainer').default;
const {
  PlayerFrame,
  LanguageChanger,
  SubtitleSettings,
} = require('../../components/Debug');

<AppContainer>
  <LanguageChanger />
  <PlayerFrame>
    <SubtitleSettingsPanel />
  </PlayerFrame>
  <SubtitleSettings />
</AppContainer>;
```
