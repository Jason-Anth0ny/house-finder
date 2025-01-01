export default function Form(onSearch) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSearch(); // Call the onSearch function passed via props
  };

    return(
        <div id="form">
        <form onSubmit={handleSubmit}>
        <div class="form-group" style={{padding: "2%"}}>
          <label for="exampleInputEmail1">Area</label>
          <input type="text" class="form-control" id="area" aria-describedby="emailHelp" placeholder="Area"/>
        </div>
        <label for="checkType">Type</label><br/>
        <div id="checkType" class="row">
          <div class="form-check col" >
            <input type="checkbox" class="form-check-input checkbox rounded-circle" id="exampleCheck1" style={{accentColor: " #61dafb"}}/>
            <label class="form-check-label" for="exampleCheck1">Flat</label>
          </div>
          <div class="form-check col">
            <input type="checkbox" class="form-check-input checkbox rounded-circle" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">House</label>
          </div>
        </div>
        <br/>
        <label for="bedrooms">Bedrooms</label><br/>
        <div id="bedrooms" class="row">
          <div class="col">
            <input type="text" class="form-control" id="fromBedrooms" placeholder="From..."/>
          </div>
          <div class="col">
            <input type="text" class="form-control" id="toBedrooms" placeholder="..To"/>
          </div>
        </div>

        <label for="date">Date</label><br/>
        <div id="date" class="row">
          <div class="col">
            <input type="text" class="form-control" id="fromDate" placeholder="From..."/>
          </div>
          <div class="col">
            <input type="text" class="form-control" id="toDate" placeholder="..To"/>
          </div>
        </div>
        
        <button type="submit" id="submitBtn">Begin Search</button>
      </form>
      </div>
    );
}

