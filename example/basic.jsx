import React from 'react';
import Fader from '../src/fader';

export default class Basic extends React.Component {

  constructor(){
    super()
    this.state = {
      message: 'wait one second...'
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        fade: true,
        message: 'setting fade to true again causes another fade (wait two more seconds)'
      })
      this.fade()
    },2000)

  }

  fade(){
    setTimeout(() => {
      this.setState({fade: true})
    },7000)
  }

  render() {
    return (
      <div>
        {this.state.message}
        <Fader fade={this.state.fade} time={2}>
          <div style={{background: 'black', color: 'white'}}>
            hey I'm fading in and out! For two seconds!
          </div>
        </Fader>
      </div>
    );
  }
}

React.render(<Basic />, document.getElementById('react'));
