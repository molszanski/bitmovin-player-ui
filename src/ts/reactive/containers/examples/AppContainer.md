## Combined examples

A semi ready application

### Subtitle Setitngs Panel:

```jsx
const { PlayerFrame, SubtitleSettings } = require("../../components/Debug.tsx");
const Boxes = require("../SubtitleSettings");

<AppContainer>
  <PlayerFrame>
    <SettingsPanel>
      <PanelItem label="Font Size:">
        <Boxes.FontSizeSelectBox />
      </PanelItem>
      <PanelItem label="Font Color">
        <Boxes.FontColorSelectBox />
      </PanelItem>
      <PanelItem label="Font Opacity">
        <Boxes.FontOpacitySelectBox />
      </PanelItem>
    </SettingsPanel>
  </PlayerFrame>

  <SubtitleSettings />
</AppContainer>;
```
