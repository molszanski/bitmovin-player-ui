### This island should be ready to use

```jsx
const AppContainer = require('../containers/AppContainer').default;
const {
  PlayerFrame,
  LanguageChanger,
  SubtitleSettings,
  ModernFrame,
  PanelControls,
} = require('../components/Debug');
const { RootStore } = require('../stores/root');

<AppContainer>
  <LanguageChanger />
  <PanelControls />
  <PlayerFrame>
    <IslandSubSettings />
  </PlayerFrame>
  <SubtitleSettings />
</AppContainer>;
```

### Control island externally

Example interaction between player-ui-framework and react islands. 
Full demo below.

```jsx static

// Define and manage some state (models) externally.
let myRoot = new RootStore();
let close = () => myRoot.ui.closeSubtitleSettingsPanel();
let open = () => myRoot.ui.openSubtitleSettingsPanel();

// This is how we inject any ui / application state
<div>
  <button onClick={open}>Open Panel</button>
  <button onClick={close}>Close Panel</button>
  <AppContainer rootStore={myRoot}> {/* Dependency Injection */}
    <PlayerFrame>
      <IslandSubSettings />
    </PlayerFrame>
    <SubtitleSettings />
  </AppContainer>;
</div>;
```


```jsx
const AppContainer = require('../containers/AppContainer').default;
const {
  PlayerFrame,
  LanguageChanger,
  SubtitleSettings,
  ModernFrame,
  PanelControls,
} = require('../components/Debug');
const { RootStore } = require('../stores/root');

let myRoot = new RootStore();
let close = () => myRoot.ui.closeSubtitleSettingsPanel();
let open = () => myRoot.ui.openSubtitleSettingsPanel();

// This is how we inject any application state
<div>
  <button onClick={open}>Open Panel</button>
  <button onClick={close}>Close Panel</button>
  <AppContainer rootStore={myRoot}>
    <PlayerFrame>
      <IslandSubSettings />
    </PlayerFrame>
    <SubtitleSettings />
  </AppContainer>;
</div>;
```
