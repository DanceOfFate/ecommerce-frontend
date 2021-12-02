import React, {useState} from 'react'
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import FormContainer from "../components/FormContainer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {registerUser} from "../redux/actions/UserActions";

const RegisterScreen = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const {error, loading, userInfo} = userRegister;



    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(registerUser(name, email, password));
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
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
                    Sign Up
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    Already have account? <Link to="/login">Sign In</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen

