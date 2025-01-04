import { useEffect } from "react";
import HouseInfo from "./HouseInfo";
import ImageViewer from "./ImageViewer";

export default function SingleDisplay({property }) {
    useEffect(() => {
        console.log(property);
    });
 
    return (
        <>
            <div id="imageCarousel" className="row" style={{  padding: "1%" }} >
                <div className="col-md-8">
                    <ImageViewer property={property}/>
                </div>
            </div>
            <div className="row" style={{padding: "0.5%", borderRadius: "7px"}}>
                <div className="col-md col-s-12" style={{ alignItems: "center", textAlign: "left", backgroundColor: "#32A7A9", padding: "1%", color: "white", marginRight: "0.5%" }}>
                    <HouseInfo property={property} />
                </div>
                <div className="col-md col-s-12" style={{display: "flex", alignItems: "center", backgroundColor: "white", color: "#1e656e", marginLeft: "0.5%" }}>
                    <p>
                        {property.description}
                    </p>
                </div>

            </div>
        </>

    )
}