### Setitngs panel:

```jsx
const { PlayerFrame, DummySelect } = require('../Debug');

<PlayerFrame>
  <SettingsPanel>
    <PanelItem label="Dummy #1">
      <DummySelect />
    </PanelItem>
    <PanelItem label="Dummy #2">
      <DummySelect />
    </PanelItem>
  </SettingsPanel>
</PlayerFrame>;
```

### Setitngs panel with Buttons:

Add 'last' classname and a button

```jsx
const { PlayerFrame, DummySelect } = require('../Debug');
const { Button } = require('../Button');

<PlayerFrame>
  <SettingsPanel>
    <PanelItem label="Dummy #1">
      <DummySelect />
    </PanelItem>
    <PanelItem classNames={['bmpui-last']}>
      <Button
        label="Button 1"
        onClick={() => {
          console.log('b1');
        }}
      />
      <Button
        label="Button 2"
        onClick={() => {
          console.log('b1');
        }}
      />
    </PanelItem>
  </SettingsPanel>
</PlayerFrame>;
```

Semi copy:

### Setitngs panel with Buttons:

Add 'last' classname and a button

```jsx
const { PlayerFrame, DummySelect } = require('../Debug');
const { Button } = require('../Button');

<PlayerFrame>
  <SettingsPanel>
    <PanelItem label="Dummy #1">
      <DummySelect />
    </PanelItem>
    <PanelItem label="Dummy #2">
      <DummySelect />
    </PanelItem>
    <PanelItem classes="bmpui-last">
      <Button label="Reset Button" classes="bmpui-ui-subtitlesettingsresetbutton" />
      <Button label="Close Button" classes="bmpui-ui-subtitlesettingsclosebutton" />
    </PanelItem>
  </SettingsPanel>
</PlayerFrame>;
```