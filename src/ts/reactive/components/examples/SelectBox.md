### Simple display:

SelectBox
```jsx
const { ModernFrame } = require('../Debug');

const options = [
  {
    value: 'null',
    label: "default"
  },
  {
    value: '10',
    label: "10%"
  },
  {
    value: '20',
    label: "20%"
  },
  {
    value: '60',
    label: "60%"
  }
];

<ModernFrame classnames='carbon'>
  <SelectBox options={options} />
</ModernFrame>;
```
