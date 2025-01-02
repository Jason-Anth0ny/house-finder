import house from '../house-sample.jpg'
import house2 from '../house-image-2.jpeg'

export default function ImageVeiwer() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={house} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={house2} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={house} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}