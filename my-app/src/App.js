import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    name: '',
    list: [],
  }
  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      list: [...this.state.list, this.state.name],
    });
  }
  render() {
    console.log("my list: ", this.state.list)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div className="header">Digite algo pra sair rodando!</div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.name} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <div className="content">você digitou: {this.state.name}
        </div>
        <List myList={this.state.list}></List>
        <p className="meutexto App-logo">{this.state.name}</p>
        <div className="footer">Olá, este é o footer</div>
      </div>
    );
  }
}

export default App;
