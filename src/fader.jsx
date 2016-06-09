import React from 'react';

export default class Fader extends React.Component{

  constructor(){
    super()
    this.state = {
      opacity: 0,
    }
    this.delays = []
    this.running = false
  }

  componentDidMount(){
    if(this.props.fade == true) this.fade()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.fade == true) this.fade()
  }

  fade() {
    this.setState({show: true})
    let time = parseFloat(this.props.time) * 1000
    let changeOpacity = time + 1000
    let hideComponent = changeOpacity + time + 200

    if(this.running) return false
    this.running = true

    this.delays.map(delay => window.clearTimeout)
    this.delays = []
    this.delay({opacity: 1}, 10)
    this.delay({opacity: 0}, changeOpacity)
    this.delay({show: false}, hideComponent)

  }

  delay(state, time){
    this.delays.push(setTimeout(() => {
      this.setState(state)
      if(state.show === false) this.running = false
    }, time))
  }

  render(){
    if(!this.state.show) return null
    let style = {
      opacity: this.state.opacity,
      transition: `opacity ${this.props.time}s ease-in-out`,
      ...this.props.style
    }
    return (
      <div style={style} {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
