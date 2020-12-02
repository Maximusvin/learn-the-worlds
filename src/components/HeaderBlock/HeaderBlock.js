import s from './HeaderBlock.module.css';

const HeaderBlock = ({ title }) => {
  return (
    <div className={s.cover}>
      <div className={s.wrap}>
        <h1 className={s.header}>{title}</h1>
        <p className={s.descr}>
          Воспользуйтесь карточками для запоминания и пополнения активныйх
          словарных запасов
        </p>
      </div>
    </div>
  );
};

export default HeaderBlock;
