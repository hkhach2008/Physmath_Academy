import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { FaArrowUpLong as Arrow } from "react-icons/fa6";

import { SignIn, SignUp, Home } from './Pages'

import { Header, Footer } from './Components'

import styles from './App.module.scss'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WithComp><Home /></WithComp>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    )
}



const WithComp = ({ children }) => {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <a href="#" className={`${styles.button} ${scrollY > 300 ? styles.active : ''}`}>
                <Arrow />
            </a>
            {children}
            <Footer />
        </>
    );
}

export default App
