import './styles/_App.sass';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card>
        <Header />
      </Card>
    </div>
  );
}

export default App;
