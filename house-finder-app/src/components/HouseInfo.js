import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

export default function HouseInfo({ property }) {
    const [isfavourte, setIsFavourite] = useState(property.fav);
    let enFormatter = new Intl.NumberFormat('en-US', { style: 'decimal' })
    let formattedPrice = "$" + enFormatter.format(Number(property.price))

    const handleFavouriteClick = () => {
        setIsFavourite(!isfavourte);
        property.fav = !isfavourte;
    }
    return (
        <div>
            <h1>{property.location}</h1>
            <h3>{formattedPrice}</h3>
            <h5>{property.bedrooms} Bedrooms</h5>
            <h5>{property.bathrooms} Bathrooms</h5>
            <div className="row" style={{paddingTop: "2%"}}>
                <div className="col-1" onClick={handleFavouriteClick}>
                    {isfavourte ? (
                        <FontAwesomeIcon icon={faHeart} size="xl" style={{ color: "104c6a", }} onClick={handleFavouriteClick} />
                    ) : (
                        <FontAwesomeIcon icon={faHeart} size="xl" style={{ color: "white", }} onClick={handleFavouriteClick} />
                    )}
                </div>
                <div className="col-1">
                    <a href={property.map} target="blank" style={{textDecoration: "none"}}>
                        <FontAwesomeIcon icon={faLocationDot} size="xl" style={{ color: "#white", }} />
                    </a>
                </div>
            </div>
        </div>
    );
}