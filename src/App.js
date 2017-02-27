import React, { Component } from 'react';
import './Marathon.css';
import Marathon from './Marathon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      runLength: 16,
      redrawKey: 'rand'+Math.random()
    }
    this.changeKilometre = this.changeKilometre.bind(this);
  }

  changeKilometre(e) {
    e.preventDefault();
    this.setState({
      runLength: document.getElementById('inputId').value,
      redrawKey: 'rand'+Math.random()
    });
  }

  render() {
    return (
      <div className="App">
        <Marathon
          key={this.state.redrawKey}
          colorStart={'#00ffd0'}
          colorEnd={'#ff5100'}
          runLength={this.state.runLength} />
        <h1>Skriv inn antall kilometer</h1>
        <form onSubmit={this.changeKilometre}>
          <input id="inputId" type="number" onChange={this.onChangedRunLength} />
          <button>Oppdater</button>
        </form>
      </div>
    );
  }
}

export default App;
