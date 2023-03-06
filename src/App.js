import './App.css';
import { SankeyChart } from './components/chartComponents/SankeyChart';
// import NetworkChart from './components/chartComponents/NetworkChart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SankeyChart />
      {/* <NetworkChart /> */}
    </div>
  );
}

export default App;
