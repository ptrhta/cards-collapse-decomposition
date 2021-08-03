import ContainerTop from './components/ContainerTop/ContainerTop';
import ContainerSearch from './components/ContainerSearch/ContainerSearch';
import Banner from './components/Banner/Banner';
import ContainerBottom from './components/ContainerBottom/ContainerBottom'

import './App.css';

function App() {
  const promo = '/promo.png';

  return (
    <div className="App col">
      <ContainerTop />
      <ContainerSearch />
      <Banner promo={promo}/>
      <ContainerBottom />
    </div>
  );
}

export default App;
