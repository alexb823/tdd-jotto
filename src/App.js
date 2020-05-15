import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

import { getSecretWord } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Input />
        <Congrats success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSecretWord: () => dispatch(getSecretWord),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
