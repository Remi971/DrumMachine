import React, {Component} from 'react';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = drumPadStyle
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  hoverIn = () => {
    this.setState({
      ...drumPadStyle, background: '#000000', color: '#ffffff'
    })
  }

  hoverOut = () => {
    this.setState({
      ...drumPadStyle, background: '#ffffff', color: '#000000'
    })
  }

  handleKey = (event) => {
    if (event.keyCode === this.props.keyCode){
      this.playSound();
    }
  }

  playSound = () => {
    const sound = document.getElementById(this.props.letter);
    sound.currentTime = 0;
    sound.play();
    let display = document.getElementById('display');
    display.innerHTML = this.props.id.replace(/-/g, ' ');
    this.hoverIn();
    setTimeout(() => {
      display.innerHTML = '';
      this.hoverOut();
    }, 1500);
  }

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.playSound}
        style={this.state}
        onMouseEnter={this.hoverIn}
        onMouseLeave={this.hoverOut}
        >
        <audio
          id={this.props.letter}
          className='clip'
          src={this.props.sound}
        />
          <h3>{this.props.letter}</h3>
      </div>
    );
  }
}

const drumPadStyle = {
  height: '80px',
  width: '80px',
  paddingTop: '20px',
  borderRadius: '5px',
  margin: '10px',
  border: 'solid black 1px',
  textAlign: 'center',
  fontSize: '25px',
  cursor: 'pointer',
  boxShadow: '5px 5px 5px #181818',
  background: '#ffffff',
  color: '#000000',
}

export default DrumPad;
