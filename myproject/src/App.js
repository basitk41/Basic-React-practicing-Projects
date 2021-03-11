import './App.css';
import Movies from './movies';
import Header from './include/header';
import Banner from './include/banner';
import Footer from './include/footer';
import Content from './include/content';

function App() {
  return (
    <main className="container">
      <Header />
      <Banner />
      <Content />
      <Movies />
      <Footer />
    </main>
  );
}

export default App;
