import React, {Component} from 'react';
import PadBank from './components/PadBank';
import bank1 from './components/data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      bank: bank1,
    };
  }
  render() {
    return (
      <div id="drum-machine">
        <div className="wrapper" /*style={wrapperStyle}*/>
          <PadBank
            className='padbank'
            bank={this.state.bank}
          />
        </div>
        <div className="pad">
          <div id="display">

          </div>
        </div>
      </div>
    );
  }
}

// const wrapperStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexWrap: 'wrap',
//   width: '300px',
// }

export default App;
