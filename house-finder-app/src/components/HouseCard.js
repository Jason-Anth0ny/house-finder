import house from '../house-sample.jpg'
import SingleDisplay from './SingleDisplay'

export default function HouseCard({ location, price, bedrooms, houseKey, setHouseClicked }) {

    let enFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
    let formattedPrice = "$" + enFormatter.format(Number(price))
    let houseId = `${houseKey}`

    const handleHouseClick = () => {
        setHouseClicked(houseId);
    }

    return (
  <div draggable id={houseId} data-dynamic-id="houseDisplayCard" class="card mb-3 houseDisplayCard" onClick={handleHouseClick}>
            <div class="row g-0">
                <div class="col-md-4" style={{ padding: "1%", alignItems: "center", display: "flex"}}>
                    <img src={house} class="img-fluid rounded" alt="Property-Image" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">{location}</h1>
                        <h4 class="card-text">{formattedPrice}</h4>
                        <h5>{bedrooms}</h5>
                        <h5>2 Bathrooms</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

