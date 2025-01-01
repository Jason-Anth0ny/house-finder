import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './components/Form';
import Navbar from './components/Navbar';
import HouseCard from './components/HouseCard';
import properties from './properties(1).json'


function App() {
  return (
    <div id="main-segment">
      <Navbar />
      <div id="main-section" class="row">
        <div class="col-4" style={{ backgroundColor: "#cfcdcc", position: "sticky", height: "100vh", padding: "3%" }}>
          <Form />
        </div>
        <div class="col-7" id="houseDisplay" style={{ backgroundColor: "#cfcdcc", padding: "1%", borderRadius: "1%", height: "100vh", overflow: "auto", }}>
          <div id='list'>
            {properties.properties.map((property) => (<HouseCard key={property.id} location={property.location} price={property.price} bedrooms={property.bedrooms + "Bedrooms"} fav={property.fav} />))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
