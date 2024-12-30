import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './components/Form';
import Button from './components/Button';
import Navbar from './components/Navbar';
import HouseCard from './components/HouseCard';

function App() {
  return (
    <div id="main-segment">
      <Navbar/>
      <div id="main-section" class="row">
        <div class="col-4" style={{backgroundColor: "#cfcdcc", position: "sticky", height: "100vh", padding: "3%"}}>
          {/* <h1>Hi</h1> */}
          <Form />
        </div>
        <div class="col-7" id="houseDisplay" style={{backgroundColor: "#cfcdcc", padding: "1%", borderRadius: "1%", height: "100vh", overflow: "auto",}}>
          <div id='list'>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
          </div>
         
        </div>
      </div>
    </div>
   
  );
}

export default App;
