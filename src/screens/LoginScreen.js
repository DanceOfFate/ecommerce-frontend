import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/partials/Loader";
import Message from "../components/partials/Message";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/UserActions";
import FormContainer from "../components/FormContainer";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);

    const {error, loading, userInfo} = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));

    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-4">
                    Sign In
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen

