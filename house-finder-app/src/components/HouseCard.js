import house from '../house-sample.jpg'


export default function HouseCard({location, price, bedrooms}) {
    let enFormatter = new Intl.NumberFormat('en-US', {style: 'decimal'})
    return(
        <div class="card mb-3" style={{backgroundColor: "#309DAB", color: "white"}}>
            <div class="row g-0">
                <div class="col-md-4" style={{padding: "1%"}}>
                 <img src={house} class="img-fluid rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h1 class="card-title">{location}</h1>
                    <h4 class="card-text">{price}</h4>
                    <h5>{bedrooms}</h5>
                    <h5>2 Bathrooms</h5>
                </div>
                </div>
            </div>
            
        </div>
    );
}

