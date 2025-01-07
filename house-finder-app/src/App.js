import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './components/Form';
import Navbar from './components/Navbar';
import HouseCard from './components/HouseCard';
import properties from './properties(1).json';
import { useEffect, useState } from 'react';
import SingleDisplay from './components/SingleDisplay';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [favClicked, setfavClicked] = useState(false);
  const [houseClicked, setHouseClicked] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties.properties);


  const setfavClickedFunc = (clicked) => {
    setfavClicked(clicked);
    setHouseClicked("");
  }

  const handleSearch = (searchCriteria) => {
    const { area, houseType, fromBedrooms, toBedrooms, fromDate, toDate } = searchCriteria;
    const filtered = properties.properties.filter((property) => {
      return (
        (!area || property.location.includes(area)) &&
        (!houseType || property.type === houseType) &&
        (!fromBedrooms || property.bedrooms >= parseInt(fromBedrooms)) &&
        (!toBedrooms || property.bedrooms <= parseInt(toBedrooms)) &&
        (!fromDate || new Date(property.date) >= new Date(fromDate)) &&
        (!toDate || new Date(property.date) <= new Date(toDate))
      );
    });
    setFilteredProperties(filtered);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const houseId = e.dataTransfer.getData('houseId');
    const updatedProperties = properties.properties.map((property) => {
      if (property.id === houseId) {
        property.fav = false;
      }
      return property;
    });
    setFilteredProperties(updatedProperties);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const setHouseClickedFunc = (clicked) => {
    setHouseClicked(clicked);
    setfavClicked(false)
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
        //only favourties are listed here
        <div id="main-section" className="row">
          <div className="col-4" style={{ backgroundColor: "#D9D9D9", position: "sticky", height: "100vh", padding: "3%" }}>
            <Form onSearch={handleSearch} />
          </div>
          <div className="col-7" id="houseDisplay" style={{ backgroundColor: "#D9D9D9", padding: "1%", borderRadius: "1%", height: "100vh", overflow: "auto" }}>
            {houseClicked ? (
              properties.properties.map((property) => property.id === houseClicked && <SingleDisplay key={property.id} property={property} />)
            ) : (
              <div id='list'>
                <div className='row' style={{display:"flex", justifyContent: "center"}}>
                  <div className='col'>
                    <h1>Your Favourites...</h1>
                  </div>
                  <div className='col' style={{display:"flex",justifyContent:"end", alignContent:"center", marginTop:"1%"}} onDrop={handleDrop} onDragOver={handleDragOver}>
                    <FontAwesomeIcon icon={faTrash} flip="horizontal" size="xl " style={{ color: "#610000", }} />
                  </div>
                </div>
                {properties.properties.map((property) =>
                  // this looks through the entire json array for properties that have fav set to true and only renders them 
                  property.fav &&
                  (
                    <HouseCard key={property.id} location={property.location} price={property.price} bedrooms={property.bedrooms + " Bedrooms"} fav={property.fav} picture={property.picture} houseKey={property.id} type={property.type} housePic={property.picture} setHouseClicked={setHouseClickedFunc} />
                  ))}
              </div>
            )}

          </div>
        </div>
      ) : (
        //all properties are listed here
        <div id="main-section" className="row">
          <div className="col-4" style={{ backgroundColor: "#D9D9D9", position: "sticky", height: "100vh", padding: "3%" }}>
            <Form onSearch={handleSearch} />
          </div>
          <div className="col-7" id="houseDisplay" style={{ backgroundColor: "#D9D9D9", padding: "1%", borderRadius: "1%", height: "100vh", overflow: "auto" }}>
            {houseClicked ? (
              properties.properties.map((property) => property.id === houseClicked && <SingleDisplay key={property.id} property={property} />)
            ) : (
              <div id='list'>
                {filteredProperties.map((property) => (
                  <HouseCard key={property.id} location={property.location} price={property.price} bedrooms={property.bedrooms + " Bedrooms"} fav={property.fav} picture={property.picture} houseKey={property.id} type={property.type} bathrooms = {property.bathrooms + " Bathrooms"} housePic={property.picture} setHouseClicked={setHouseClickedFunc} />
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
