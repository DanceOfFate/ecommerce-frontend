import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from "../redux/actions/ProductActions";
import {useNavigate} from "react-router-dom";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Button,
    Card,
    ListGroupItem,
    Form
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/partials/Loader";
import Message from "../components/partials/Message";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const ProductScreen = () => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { loading, product, error } = productDetails;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
    }

    const {id} = useParams();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [])


    const renderProductData = () => {
        return (
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name}/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.num_reviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>
                                        {product.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.count_in_stock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.count_in_stock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item className="d-flex justify-content-center">
                                <Button
                                    onClick={addToCartHandler}
                                    className="btn btn-block"
                                    type="button"
                                    disabled={product.count_in_stock === 0}
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        )
    }




    return (
        <div>
            <Link to="/" className="btn btn-light my-3"><FontAwesomeIcon icon={faArrowLeft} /> Go Back</Link>
            {   loading
                ? <Loader />
                : error ?
                    <Message variant="danger">
                        {error}
                    </Message>
                :
                renderProductData()
            }
        </div>
    )
}

export default ProductScreen

