import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {Container} from 'react-bootstrap';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
    let routes;

    routes = (
                <Routes>
                    <Route path="/" element={<HomeScreen/>} exact/>
                    <Route path="/login" element={<LoginScreen />}  />
                    <Route path="/register" element={<RegisterScreen />}  />
                    <Route path="/product/:id" element={<ProductScreen />} />
                    <Route path="/cart" element={<CartScreen />} />
                    <Route path="/cart/:id" element={<CartScreen />} />
                </Routes>
    )

    return (
        <>
            <Header/>
            <main className="py-3">
                <Container>
                    <Router>
                        {routes}
                    </Router>
                </Container>
            </main>
            <Footer/>
        </>

    )
}

export default App


