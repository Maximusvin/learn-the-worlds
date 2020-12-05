import { Component } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import cl from 'classnames';
import s from './CardsBlock.module.css';

class CardItem extends Component {
  state = {};

  render() {
    const {
      eng,
      rus,
      studied,
      isRemembered,
      onChangeStudied,
      onRemoveCard,
      onChangeRemembered,
    } = this.props;

    return (
      <li className={s.cardItem}>
        <p
          className={cl(s.text, {
            [s.rus]: studied,
            [s.isRemembered]: isRemembered,
          })}
          onClick={onChangeStudied}
        >
          {!studied ? eng : rus}
        </p>

        <div className={s.controls}>
          <input type="checkbox" onChange={onChangeRemembered} />
          <DeleteOutlined onClick={onRemoveCard} />
        </div>
      </li>
    );
  }
}

export default CardItem;
