import { useState } from "react";

export default function Form({ onSearch }) {
  const [area, setArea] = useState("");
  const [houseType, setHouseType] = useState("");
  const [fromBedrooms, setFromBedrooms] = useState("");
  const [toBedrooms, setToBedrooms] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log({ area, houseType, fromBedrooms, toBedrooms, fromDate, toDate });
    // Call the onSearch function if provided
    if (onSearch) {
      onSearch({ area, houseType, fromBedrooms, toBedrooms, fromDate, toDate });
    } else {
      console.log("OnSearch not provided")
    }
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ paddingBottom: "2%" }}>
          <label htmlFor="area">Area</label>
          <input
            type="text"
            className="form-control"
            id="area"
            placeholder="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)} // Update state
          />
        </div>

        <label htmlFor="checkType">Type</label>
        <br />
        <div id="checkType" className="row">
          <div className="form-check col">
            <input
              type="radio"
              name="housetype"
              className="form-check-input checkbox rounded-circle"
              id="flat"
              value="Flat"
              checked={houseType === "Flat"}
              onChange={(e) => setHouseType(e.target.value)} // Update state
              style={{ accentColor: "#61dafb" }}
            />
            <label className="form-check-label" htmlFor="flat">
              Flat
            </label>
          </div>
          <div className="form-check col">
            <input
              type="radio"
              name="housetype"
              className="form-check-input checkbox rounded-circle"
              id="house"
              value="House"
              checked={houseType === "House"}
              onChange={(e) => setHouseType(e.target.value)} // Update state
            />
            <label className="form-check-label" htmlFor="house">
              House
            </label>
          </div>
        </div>
        <br />

        <label htmlFor="bedrooms">Bedrooms</label>
        <br />
        <div id="bedrooms" className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="fromBedrooms"
              placeholder="From..."
              value={fromBedrooms}
              onChange={(e) => setFromBedrooms(e.target.value)} // Update state
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="toBedrooms"
              placeholder="..To"
              value={toBedrooms}
              onChange={(e) => setToBedrooms(e.target.value)} // Update state
            />
          </div>
        </div>

        <label htmlFor="date">Date</label>
        <br />
        <div id="date" className="row">
          <div className="col">
            <input
              type="date"
              className="form-control"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)} // Update state
            />
          </div> to
          <div className="col">
            <input
              type="date"
              className="form-control"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)} // Update state
            />
          </div>
        </div>
        <br/>
        <button type="submit" id="submitBtn">
          Begin Search
        </button>
      </form>
    </div>
  );
}