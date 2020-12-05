import Cards from './Cards';
import s from './CardsBlock.module.css';

const CardsBlock = ({
  words,
  countWords,
  countStudied,
  onChangeStudied,
  onRemoveCard,
  onChangeRemembered,
  onAddWord,
}) => {
  return (
    <div>
      <h2 className={s.title}>Кликай по карточкам и узнавай новые слова</h2>
      <p className={s.description}>
        Воспользуйтесь карточками для запоминания слов и пополнения словарного
        запаса
      </p>
      <Cards
        words={words}
        onChangeStudied={onChangeStudied}
        onChangeRemembered={onChangeRemembered}
        onRemoveCard={onRemoveCard}
        onAddWord={onAddWord}
      />
      <ul>
        <li>Всего слов: {countWords}</li>
        <li>Пройдено слов: {countStudied}</li>
        <li>Осталось выучить: {countWords - countStudied}</li>
      </ul>
    </div>
  );
};

export default CardsBlock;
