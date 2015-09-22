#Fader

Fade a component in for x amount of seconds, then make it disappear, and completely hide (return null) until you choose to fade it again.

##Install

`npm install legit-fader`

##Example

```js
//when you set this.state.fade to true, it's triggered
<Fader fade={this.state.fade} time={2}>
  <div style={{background: 'black', color: 'white'}}>
    Fading in and out! For two seconds!
  </div>
</Fader>
```

The child component can be anything.

###Props

- `time` in seconds, total time of the fade
- `fade` every time it's set to true, it triggers a fade in and out
