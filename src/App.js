import logo from './logo.svg';
import './App.css';

// Data
import metalData from './data/metal.json'

// Components
import Heading from './components/Heading/Heading.js'
import MetalMeta from './components/MetalMeta/MetalMeta.js'

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta numberOfBands={metalData.length} />
    </div>
  );
}

export default App;
