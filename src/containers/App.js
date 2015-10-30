
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
        <div className="window-content">
          <div className="pane-group">
            <div className="pane">

              <form>
                <input
                  type="text"
                  name="nameField"
                  ref="nameField"
                  onChange={(e) => this.onChange(e)}
                  value={this.props.form.name}
                  />

                <button
                  className="btn btn-form btn-default"
                  onClick={(e) => this.handleClick(e)}>Add
                </button>
              </form>

              <ul>
                {names}
              </ul>
              <img src={img} width="100" height="130" />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select)(App);
