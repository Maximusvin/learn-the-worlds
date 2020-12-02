import { Component } from 'react';
import Layout from './Layout/Layout';
import CardsBlock from './CardsBlock/CardsBlock';

import WORDS from '../DATA/wordList.json';

import './App.css';

export default class App extends Component {
  state = {
    words: WORDS,
  };

  handleChangeStudied = id => {
    this.setState(state => ({
      words: state.words.map(word =>
        word.id === id ? { ...word, studied: !word.studied } : word,
      ),
    }));
  };

  handleChangeRemembered = id => {
    this.setState(({ words }) => ({
      words: words.map(word =>
        word.id === id ? { ...word, isRemembered: !word.isRemembered } : word,
      ),
    }));
  };

  handleRemoveCard = cardID => {
    this.setState(({ words }) => ({
      words: words.filter(({ id }) => id !== cardID),
    }));
  };

  countStudiedWords = () => {
    return this.state.words.reduce(
      (acc, word) => (word.isRemembered ? acc + 1 : acc),
      0,
    );
  };

  render() {
    const countWords = this.state.words.length;
    const countStudied = this.countStudiedWords();
    const { words } = this.state;
    return (
      <Layout>
        <CardsBlock
          words={words}
          countWords={countWords}
          countStudied={countStudied}
          onChangeStudied={this.handleChangeStudied}
          onChangeRemembered={this.handleChangeRemembered}
          onRemoveCard={this.handleRemoveCard}
        />
      </Layout>
    );
  }
}
