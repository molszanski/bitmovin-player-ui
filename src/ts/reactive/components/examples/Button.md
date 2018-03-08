Button with a label:

```jsx
const { ModernFrame } = require('../Debug');
const handler = function(el) {
  alert('Button: ' + el + ' clicked');
};

<ModernFrame classes="carbon">
  <Button label="Inline Button" onClick={() => handler(1)} />
  |
  <Button label="Inline Button2" onClick={() => handler(2)} />
  <br />
  <Button label="Without handler" />
</ModernFrame>;
```

Special buttons with additional classes:

```jsx
const { ModernFrame } = require('../Debug');

<ModernFrame classes="carbon">
  <Button label="Huge" classes="ui-hugereplaybutton" />
  <Button label="Reset Button" classes="bmpui-ui-subtitlesettingsresetbutton" />
  <Button label="Close Button" classes="bmpui-ui-subtitlesettingsclosebutton" />
</ModernFrame>;
```
