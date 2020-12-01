import s from './HeaderBlock.module.css';

const HeaderBlock = ({ title }) => {
  return (
    <div class="cover">
      <div class="wrap">
        <h1 class="header">{title}</h1>
        <p class="descr">
          Воспользуйтесь карточками для запоминания и пополнения активныйх
          словарных запасов
        </p>
      </div>
    </div>
  );
};

export default HeaderBlock;
