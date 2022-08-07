import Carousel from "react-bootstrap/Carousel";

const CarouselFade = ({products}) => {
    return (
        <Carousel fade>
            {products &&
                products.map((product, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-10 my-auto"
                            src={product.images}
                            alt="First slide"
                            style={{
                                width: "30vw",
                                marginLeft: "36%",
                                marginTop: "5px",
                                height: "20vh",
                                borderRadius: "20px"
                            }}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

        
        </Carousel>
    );
}

export default CarouselFade;
