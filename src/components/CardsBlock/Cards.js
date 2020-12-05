import { Component } from 'react';
import { Input } from 'antd';
import getTranslateWord from '../../services/dictionary';

import CardItem from './CardItem';
import s from './CardsBlock.module.css';

const { Search } = Input;

class Cards extends Component {
  state = {
    eng: '',
    isBusy: false,
  };

  handleInputChange = ({ target }) => {
    this.setState({ eng: target.value });
  };

  getTheWord = async () => {
    const getWord = await getTranslateWord(this.state.eng);
    console.log(getWord);

    // this.props.onAddWord(this.state);

    this.setState({ eng: '', isBusy: !this.state.isBusy });
  };

  handleSubmit = async () => {
    this.setState({ isBusy: !this.state.isBusy }, this.getTheWord);
  };

  render() {
    const {
      words,
      onChangeStudied,
      onRemoveCard,
      onChangeRemembered,
    } = this.props;

    return (
      <>
        <div className={s.form}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            value={this.state.eng}
            loading={this.state.isBusy}
            onChange={this.handleInputChange}
            onSearch={this.handleSubmit}
          />
        </div>
        <ul className={s.cardList}>
          {words.map(({ id, eng, rus, studied, isRemembered }) => (
            <CardItem
              eng={eng}
              rus={rus}
              studied={studied}
              isRemembered={isRemembered}
              onChangeStudied={() => onChangeStudied(id)}
              onChangeRemembered={() => onChangeRemembered(id)}
              onRemoveCard={() => onRemoveCard(id)}
              key={id}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Cards;
