import CardItem from './CardItem';
import s from './CardsBlock.module.css';

const CardsBlock = ({
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
      <ul>
        <li>Всего слов: {countWords}</li>
        <li>Пройдено слов: {countStudied}</li>
        <li>Осталось выучить: {countWords - countStudied}</li>
      </ul>
    </div>
  );
};

export default CardsBlock;