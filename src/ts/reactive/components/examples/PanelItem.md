Simple. Also additional classnames can be pushed

```jsx
const { ModernFrame } = require('../Debug');

const options = [
  {
    value: 'null',
    label: 'default'
  },
  {
    value: '10',
    label: '10%'
  },
  {
    value: '20',
    label: '20%'
  },
  {
    value: '60',
    label: '60%'
  }
];

<ModernFrame classes='carbon'>
  <PanelItem label="Simple">
    <SelectBox options={options} value='null' />
  </PanelItem>

  <PanelItem label="With additional classnames" classes={['a','b']}>
    <SelectBox options={options} value='null' />
  </PanelItem>
</ModernFrame>;
```
