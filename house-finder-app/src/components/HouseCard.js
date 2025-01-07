import house from '../house-sample.jpg'

export default function HouseCard({ location, price, bedrooms, houseKey, setHouseClicked, type, bathrooms, housePic }) {

    let enFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
    let formattedPrice = "$" + enFormatter.format(Number(price))
    let houseId = `${houseKey}`

    const handleHouseClick = () => {
        setHouseClicked(houseId);
    }

    const handleDragStart = (e) => {
        e.dataTransfer.setData('houseId', houseId);
    };

    return (
  <div draggable id={houseId} data-dynamic-id="houseDisplayCard" class="card mb-3 houseDisplayCard" onClick={handleHouseClick} onDragStart={handleDragStart}>
            <div class="row g-0">
                <div class="col-md-4" style={{ padding: "1%", alignItems: "center", display: "flex"}}>
                    <img src={housePic} class="img-fluid rounded" alt="Property-Image" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="card-title">{location}</h1>
                        <h3 class="card-text">{formattedPrice}</h3>
                        <h4>{type}</h4>
                        <h5>{bedrooms}</h5>
                        <h5>{bathrooms}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

