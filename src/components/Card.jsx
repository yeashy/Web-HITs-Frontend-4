import { Card, Col } from "react-bootstrap";
import { requestNewsThunk } from "./store/newsReducer";
import { useDispatch } from "react-redux";
import { newsAPI } from "./api/newsAPI";

var NewsTemplate = (props) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        newsAPI.requestLike(props.id)
            .then(() => {
                dispatch(requestNewsThunk());
            });
    }

    return (
        <Card className="mb-3">
            <Card.Header className="d-flex justify-content-sm-between">
                <Col lg="8" as="h5" className="m-0 text-left">{props.title}</Col>
                <Col lg="4" className="m-0"><p className="d-flex text-secondary justify-content-end m-0">{props.tags}</p></Col>
            </Card.Header>
            <Card.Body>
                <Card.Text >
                    <p className="m-0">{props.text}</p>

                </Card.Text>
            </Card.Body>
            <img src={props.src} alt="" />
            <Card.Footer className="d-flex justify-content-sm-between">
                <Col lg="6" className="d-flex mb-0"><h6 className="mb-0">Date:&#160;</h6><p className="mb-0" style={{ marginTop: -2 + "px" }}>{props.date}</p></Col>
                <Col lg="6">
                    <p className="d-flex text-secondary justify-content-end m-0">
                        <i className="fas fa-heart text-danger" style={{ marginTop: 5 + "px", cursor: "pointer" }} onClick={handleClick}></i>
                        <p className="m-0">&#160;{props.likes}</p>
                    </p>
                </Col>
            </Card.Footer>
        </Card>
    )
}

export default NewsTemplate;