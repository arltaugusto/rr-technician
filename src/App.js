import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Header title="Technicians" />
    </div>
  );
}

export default App;
