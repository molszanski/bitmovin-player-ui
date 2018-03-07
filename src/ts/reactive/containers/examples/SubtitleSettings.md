Less verbose implementation:

```typescript static
export const FontColorSelectBox = subsInjector(function({ subs }: Props) {
  return (
    <SelectBox
      options={fontColorOpts}
      onChange={(e: any) => {
        subs.fontColor = e.target.value;
      }}
    />
  );
});
```

### More elements at once:

```jsx
const AppContainer = require("../AppContainer").default;
const {SubtitleSettings} = require("../../components/Debug");
const B = require("../SubtitleSettings");
<AppContainer>
  <B.FontSizeSelectBox />
  <B.FontColorSelectBox />
  <B.FontOpacitySelectBox />
  <SubtitleSettings/>
</AppContainer>;
```
