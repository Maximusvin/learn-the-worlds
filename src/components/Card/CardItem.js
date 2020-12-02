import s from './Card.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import cl from 'classnames';

const CardItem = ({
  words,
  onChangeStudied,
  onRemoveCard,
  onChangeRemembered,
}) => {
  return words.map(({ eng, rus, id, studied, isRemembered }) => (
    <li key={id} className={s.cardItem}>
      <p
        className={cl(s.text, {
          [s.rus]: studied,
          [s.isRemembered]: isRemembered,
        })}
        // className={!studied ? s.eng : s.rus}
        onClick={() => onChangeStudied(id)}
      >
        {!studied ? eng : rus}
      </p>
      <div className={s.controls}>
        <input type="checkbox" onChange={() => onChangeRemembered(id)} />
        <DeleteOutlined onClick={() => onRemoveCard(id)} />
      </div>
    </li>
  ));
};

export default CardItem;
