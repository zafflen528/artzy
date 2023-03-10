import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import SplashScreen from "./components/SplashScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import Login from "./Login";
import Store from "./Store";
import ProductDetail from "./components/ProductDetail";

function App() {
    return (
        <div id="root">
            <Router>
                <div className="mobile-container">
                    <section className="mobile-view">
                        <Routes>
                            <Route path="/" element={<Login />}/>
                            <Route path="/store" element={<Store />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                        </Routes>
                    </section>
                </div>
            </Router>
        </div>
    );
}

export default App;
