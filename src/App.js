import './App.css';
import SankeyChart from './components/chartComponents/SankeyChart'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SankeyChart />
    </div>
  );
}

export default App;
