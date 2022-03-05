import logo from './logo.svg';
import './App.css';

// Data
import metalData from './data/metal.json'

// Components
import Heading from './components/Heading/Heading.js'
import MetalMeta from './components/MetalMeta/MetalMeta.js'
import Band from './components/Band/Band.js'

function App() {

  const bandCards = metalData.map((obj) => {
    return  <Band 
      key = {obj.band_name}
      name = {obj.band_name}
      formed = {obj.formed}
      origin = {obj.origin}
      fans = {obj.fans}
      split = {obj.split}
    />
  })

  return (
    <div className="App">
      <Heading />
      <MetalMeta numberOfBands={metalData.length} />

      <div id='bandList'>
        {bandCards}
      </div>
    </div>
  );
}

export default App;
