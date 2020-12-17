import React, {Component} from 'react';
import DrumPad from './DrumPad';


class PadBank extends Component{

  render() {
    const data = this.props.bank;
    return (data.map((drum) => (
      <DrumPad
        letter={drum.letter}
        id={drum.name}
        sound={drum.url}
        key={drum.keyCode}
        hoverIn={this.props.hoverIn}
        hoverOut={this.props.hoverOut}
        keyCode={drum.keyCode}
      />
    )))
  }
}

export default PadBank;
