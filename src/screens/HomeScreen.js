import React, {useEffect} from 'react'
import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/partials/Loader";
import Message from "../components/partials/Message";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../redux/actions/ProductActions";

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, []);


    console.log(products)

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error ? <Message
                            variant="danger"
                           >
                    {error}
                    </Message>
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}

export default HomeScreen

