import './styles/main.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import Aos from 'aos/dist/aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      disable: window.innerWidth < 769
    });
  }, []);
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
