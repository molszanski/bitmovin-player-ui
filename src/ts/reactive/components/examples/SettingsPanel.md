### Setitngs panel:

```jsx
const { PlayerFrame } = require("../Debug");
function DummySelect() {
  return (
    <select className="bmpui-ui-selectbox">
      <option value="null">default</option>
      <option value="50">50%</option>
      <option value="75">75%</option>
      <option value="400">400%</option>
    </select>
  );
}

<PlayerFrame>
  <SettingsPanel>
      <PanelItem label="Dummy #1">
        <DummySelect />
      </PanelItem>
      <PanelItem label="Dummy #2">
        <DummySelect />
      </PanelItem>
    </SettingsPanel>
</PlayerFrame>
```
