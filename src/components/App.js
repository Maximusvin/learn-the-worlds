import { Component } from 'react';
import database from '../services/firebase';

import Layout from './Layout/Layout';
import CardsBlock from './CardsBlock/CardsBlock';
import LoginPage from '../pages/Login/Login';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default class App extends Component {
  state = {
    words: [],
  };

  componentDidMount() {
    database
      .ref('/CARDS')
      .once('value')
      .then(res => this.setState({ words: res.val() }, this.setNewWord));
  }

  setNewWord = () => {
    const { words } = this.state;
    database.ref('/CARDS').set([
      ...words,
      // {
      //   id: +new Date(),
      //   eng: 'mouse',
      //   rus: 'мышь',
      //   studied: false,
      //   isRemembered: false,
      // },
    ]);
  };

  addNewWord = ({ eng }) => {
    const word = {
      id: uuidv4(),
      eng,
      rus: '',
      studied: false,
      isRemembered: false,
    };
    this.setState(prevState => ({ words: [...prevState.words, word] }));
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
        <LoginPage />
        <CardsBlock
          words={words}
          countWords={countWords}
          countStudied={countStudied}
          onChangeStudied={this.handleChangeStudied}
          onChangeRemembered={this.handleChangeRemembered}
          onRemoveCard={this.handleRemoveCard}
          onAddWord={this.addNewWord}
        />
      </Layout>
    );
  }
}
