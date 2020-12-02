import CardItem from './CardItem';
import s from './CardsBlock.module.css';

const Cards = ({
  words,
  onChangeStudied,
  onRemoveCard,
  onChangeRemembered,
}) => {
  return (
    <ul className={s.cardList}>
      {words.map(word => (
        <CardItem
          {...word}
          onChangeStudied={() => onChangeStudied(word.id)}
          onChangeRemembered={() => onChangeRemembered(word.id)}
          onRemoveCard={() => onRemoveCard(word.id)}
          key={word.id}
        />
      ))}
    </ul>
  );
};

export default Cards;
