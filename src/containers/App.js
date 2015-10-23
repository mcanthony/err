
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const img = require('../images/avatar.jpg');

class App extends Component {
  componentDidMount() {
    console.log('APP PROPS: ', this.props);
  }
  handleClick(e) {
    e.preventDefault();
    const name = this.refs.nameField.value.trim();
    this.props.addName({ name });
  }
  onChange(e) {
    this.props.setForm({ name: e.target.value });
  }
  render() {
    const names = this.props.names.map((current, index) => {
      return (
        <li key={index}>{current.name}</li>
      );
    });
    return (
      <div className="window">
        <input
          type="text"
          name="nameField"
          ref="nameField"
          onChange={(e) => this.onChange(e)}
          value={this.props.form.name}
          />
        <button
          onClick={(e) => this.handleClick(e)}>Klikkaa
        </button>
        <ul>
          {names}
        </ul>
        <img src={img} width="100" height="130" />
      </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(App);
