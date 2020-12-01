import s from './ContentBlock.module.css';

const ContentBlock = ({ descr }) => {
  return <div className={s.descr}>{descr}</div>;
};

export default ContentBlock;
