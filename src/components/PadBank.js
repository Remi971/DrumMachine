import React, {Component} from 'react';
import DrumPad from './DrumPad';


class PadBank extends Component{
  render() {
    const data = this.props.bank;
    return data.map((drum) => (
      <DrumPad
        letter={drum.letter}
        playSound={this.props.playSound}
        id={drum.letter}
        sound={drum.url}
        key={drum.keyCode}
      />
    ))
  }
}

export default PadBank;
