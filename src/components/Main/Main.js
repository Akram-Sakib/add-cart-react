import React from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import "./Main.css";

const Main = () => {
    return (
        <div className="main">
            <Header></Header>
            <Shop></Shop>
        </div>
    );
};

export default Main;