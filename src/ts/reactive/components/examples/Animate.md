A FadeIn / FadeOut animation component.

* Uses css class add/remove based animation
* Handles gracefull component mount / unmount

- First will render on events like `onMouseOver`
- Second will

```jsx
const { ModernFrame } = require('../Debug');

initialState = { show: false };
toggle = () => setState({ show: !state.show });
open = () => setState({ show: true });
close = () => setState({ show: false });

<div className="debug">
  <div>show: {state.show.toString()}</div>
  <button onClick={toggle}>Toggle</button>
  <button onClick={open}>Open</button>
  <button onClick={close}>close</button>

  <div className="animatable">
    <Animate duration={1000} show={state.show}>
      <span> hiddeon on start </span>
    </Animate>
    <Animate duration={1000} show={!state.show}>
      <span> Reversed state </span>
    </Animate>
    <Animate duration={1000} show={false} displayOnMount>
      <span> Instant render </span>
    </Animate>
    <Animate duration={1000} show={true} fadeIn="test">
      <span> Instant render </span>
    </Animate>
  </div>
</div>;
```

Headless mode:
(Not ready for production)

```jsx
const { ModernFrame } = require('../Debug');
initialState = { show: false };

<div className="debug">
  <button onClick={() => setState({ show: !state.show })}>Toggle</button>
  <button onClick={() => setState({ show: true })}>Open</button>
  <button onClick={() => setState({ show: false })}>close</button>

  <div className="animatable">
    <Animate duration={1000} show={state.show} headless>
      <Button
        label="Reset Button"
        classes="bmpui-ui-subtitlesettingsresetbutton"
      />
    </Animate>
  </div>
</div>;
```
