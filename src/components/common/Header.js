import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faUser, faUserCircle, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {logoutUser} from "../../redux/actions/UserActions";



const Header = (props) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    const logoutHandler = () => {
        dispatch(logoutUser());
    }


    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">DejvShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} />Cart</Nav.Link>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">

                                    <NavDropdown.Item href="/profile"><FontAwesomeIcon icon={faUserCircle} /> Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logoutHandler}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link href="/login"><FontAwesomeIcon icon={faUser}/>Login</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

