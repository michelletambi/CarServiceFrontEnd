import React from "react";
import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import Customer from "../components/Customer";
import Footer from "../components/Footer";

const WelcomeCustomerContainer = () => {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="elementBody">
            <div id="titleBar">
                <h1 id="title">
                    Welcome back to Carz4FREE
                </h1>
                <h2 id="subtitle">We missed you!</h2>
            </div>
            </main>
            <CarList/>
            <Footer/>
        </>
    );
}

export default WelcomeCustomerContainer;