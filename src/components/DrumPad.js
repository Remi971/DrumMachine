import React, {Component} from 'react';

class DrumPad extends Component {

  render() {
    return (
      <div
        className="drum-pad"
        style={drumPadStyle}
        id={this.props.id}
        onClick={this.props.playSound}
        >
        <h1>{this.props.letter}</h1>
        <audio src={this.props.sound}></audio>
      </div>
    );
  }
}

const drumPadStyle = {
  height: '80px',
  width: '80px',
  borderRadius: '5px',
  margin: '10px',
  border: 'solid black 1px',
  textAlign: 'center',
  fontSize: '25px',
  cursor: 'pointer',
  boxShadow: '5px 5px 5px #707070',

}

export default DrumPad;
