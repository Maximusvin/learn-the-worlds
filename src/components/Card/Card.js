import CardItem from './CardItem';
import s from './Card.module.css';

const Card = ({
  words,
  countWords,
  countStudied,
  onChangeStudied,
  onRemoveCard,
  onChangeRemembered,
}) => {
  return (
    <div>
      <h2 className={s.title}>Кликай по карточкам и узнавай новые слова</h2>
      <p>
        Воспользуйтесь карточками для запоминания слов и пополнения словарного
        запаса
      </p>
      <ul className={s.cardList}>
        <CardItem
          words={words}
          onChangeStudied={onChangeStudied}
          onChangeRemembered={onChangeRemembered}
          onRemoveCard={onRemoveCard}
        />
      </ul>
      <ul>
        <li>Всего слов: {countWords}</li>
        <li>Пройдено слов: {countStudied}</li>
        <li>Осталось выучить: {countWords - countStudied}</li>
      </ul>
    </div>
  );
};

export default Card;
