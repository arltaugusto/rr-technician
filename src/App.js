import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import TechniciansSection from './Components/TechniciansSection/TechniciansSection';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Header title="Technicians" />
        <TechniciansSection />
      </div>

    </div>
  );
}

export default App;
