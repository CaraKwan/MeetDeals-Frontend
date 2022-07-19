import '../styles/Home.css'

import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import HomeHeader from "./HomeHeader";
import Login from "./Login";
import Register from "./Register";

import Verify from "./Verify";




function Home(props) {
    const { isLoggedIn, handleLoggedIn } = props;

    const showLogin = () => {
        return isLoggedIn ? (
            <Navigate to="/Main" />
        ) : (
            <Login handleLoggedIn={handleLoggedIn} />
        );
    };


    const showMain = () => {
        return isLoggedIn ? <Home /> : <Navigate to="/login" />;
    };


    return (
        <div className='home'>
            <HomeHeader />
            <Routes>
                <Route path="/" exact render={showLogin} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/Register" component={Register} />
                <Route path="/Verify" component={Verify} />
                <Route path="/Main" render={showMain} />
            </Routes>



        </div >
    )
}

export default Home;