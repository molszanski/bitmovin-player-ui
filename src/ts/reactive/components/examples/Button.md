Button with a label:

```jsx
const { ModernFrame } = require('../Debug');
const { Label } = require('../Label');

const handler = function(el) {
  alert('Button: ' + el + ' clicked');
};

<ModernFrame classnames="carbon">
  <Button label="Inline Button" onClick={() => handler(1)} />
  |
  <Button label="Inline Button2" onClick={() => handler(2)} />
  <br />
  <Button label="Without handler" />
</ModernFrame>;
```
