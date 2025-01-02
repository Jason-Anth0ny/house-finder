import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './components/Form';
import Navbar from './components/Navbar';
import HouseCard from './components/HouseCard';
import properties from './properties(1).json';
import { useEffect, useState } from 'react';
import SingleDisplay from './components/SingleDisplay';

function App() {
  const [favClicked, setfavClicked] = useState(false);
  const [houseClicked, setHouseClicked] = useState("");

  const setfavClickedFunc = (clicked) => {
    setfavClicked(clicked);
  }

  const setHouseClickedFunc = (clicked) => {
    setHouseClicked(clicked);
  }

  const takeMeHome = () => {
    setfavClicked(false);
    setHouseClicked("");
  }

  useEffect(() => {
    if (favClicked) {
      console.log("Favourites Clicked");
    }
  }, [favClicked])

  useEffect(() => {
    if (houseClicked) {
      console.log(houseClicked + " house was clicked on")
    }
  })

  return (
    <div id="main-segment">
      <Navbar returnClickedStatus={setfavClickedFunc} favStatus={favClicked} takeMeHome={takeMeHome} />
      {favClicked ? (
        <div id="main-section" className="row">
          <div className="col-4" style={{ backgroundColor: "#D9D9D9", position: "sticky", height: "100vh", padding: "3%" }}>
            <Form />
          </div>
          <div className="col-7" id="houseDisplay" style={{ backgroundColor: "#D9D9D9", padding: "1%", borderRadius: "1%", height: "100vh", overflow: "auto" }}>
            <div id='list'>
              <h1>Your Favourites...</h1>
              {properties.properties.map((property) =>
                property.fav &&
                (
                  <HouseCard key={property.id} location={property.location} price={property.price} bedrooms={property.bedrooms + " Bedrooms"} fav={property.fav} picture={property.picture} houseKey={property.id} setHouseClicked={setHouseClickedFunc} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div id="main-section" className="row">
          <div className="col-4" style={{ backgroundColor: "#D9D9D9", position: "sticky", height: "100vh", padding: "3%" }}>
            <Form />
          </div>
          <div className="col-7" id="houseDisplay" style={{ backgroundColor: "#D9D9D9", padding: "1%", borderRadius: "1%", height: "100vh", overflow: "auto" }}>
            {houseClicked ? (
              <SingleDisplay />
            ) : (
              <div id='list'>
                {properties.properties.map((property) => (
                  <HouseCard key={property.id} location={property.location} price={property.price} bedrooms={property.bedrooms + " Bedrooms"} fav={property.fav} picture={property.picture} houseKey={property.id} setHouseClicked={setHouseClickedFunc} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
