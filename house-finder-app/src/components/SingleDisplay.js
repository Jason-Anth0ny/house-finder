import HouseInfo from "./HouseInfo";
import ImageVeiwer from "./ImageViewer";

export default function SingleDisplay() {
    return (
        <div id="imageCarousel" className="row" style={{ position: "fixed", width: "inherit", padding: "1%" }} >

            <div className="col-7">
                <ImageVeiwer />
            </div>
            <div className="col" style={{backgroundColor: "pink", padding: "1%"}}>
                <HouseInfo  />
            </div>

        </div>
    )
}