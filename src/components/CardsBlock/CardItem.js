import { DeleteOutlined } from '@ant-design/icons';
import cl from 'classnames';
import s from './CardsBlock.module.css';

const CardItem = ({
  eng,
  rus,
  studied,
  isRemembered,
  onChangeStudied,
  onRemoveCard,
  onChangeRemembered,
}) => {
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
};

export default CardItem;
