import { Carousel } from "react-bootstrap";

var Slider = (props) => {
    return(
        <Carousel className="mb-3 mt-3">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={props.img1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={props.img2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={props.img3}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
    )
}

export default Slider;