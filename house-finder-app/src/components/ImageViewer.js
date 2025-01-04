import { useEffect, useState } from 'react';
import house from '../house-sample.jpg'

export default function ImageViewer({ property }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (property && property.pictureArray) {
            setImages(property.pictureArray);
            console.log("property.pictureArray", property.pictureArray);
        }
    }, [property]);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div
                        className="carousel-inner"
                        style={{ borderRadius: "10px" }}
                    >
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <div
                                    className={`carousel-item ${
                                        index === 0 ? "active" : ""
                                    }`}
                                    key={index}
                                >
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="carousel-item active">
                                <p>No images available</p>
                            </div>
                        )}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
