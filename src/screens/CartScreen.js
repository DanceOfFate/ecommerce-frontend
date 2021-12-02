import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card
} from 'react-bootstrap';
import Message from "../components/partials/Message";
import { addToCart, removeFromCart } from "../redux/actions/CartActions";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faTrash} from "@fortawesome/free-solid-svg-icons";

const CartScreen = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty]);



    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ?
                        <Message
                            variant="info"
                        >
                            Your cart is empty <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /> Go Back</Link>
                        </Message>
                        : (
                        <ListGroup variant="flush">
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                     <Row>
                                         <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                         </Col>
                                         <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                         </Col>
                                         <Col md={2}>
                                             ${item.price}
                                         </Col>
                                         <Col md={3}>
                                             <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, e.target.value))}
                                            >
                                                {
                                                    [...Array(item.count_in_stock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                         </Col>
                                         <Col md={1}>
                                             <Button
                                                 onClick={() => removeFromCartHandler(item.product)}
                                                 type="button"
                                                 variant="light"
                                             >
                                                <FontAwesomeIcon icon={faTrash} />
                                             </Button>
                                         </Col>
                                     </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup.Item variant="flush">
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}) items</h2>
                        ${cartItems.reduce((acc, item) => acc + Number(item.qty) * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            onClick={checkoutHandler}
                            type="button"
                            className="btn btn-block"
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen

