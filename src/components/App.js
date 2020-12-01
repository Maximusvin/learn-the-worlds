import Layout from './Layout/Layout';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import ContentBlock from './ContentBlock/ContentBlock';
import FooterBlock from './FooterBlock/FooterBlock';

import './App.css';

const App = () => {
  return (
    <Layout>
      <HeaderBlock
        title="Учите слова онлайн"
        descr="Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов"
      />
      <ContentBlock />
      <FooterBlock />
    </Layout>
  );
};

export default App;
