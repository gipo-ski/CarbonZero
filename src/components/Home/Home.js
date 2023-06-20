import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import "../Navbar/Navbar.css"
import foot from "../../assets/foot1433.png";
import amazon from "../../assets/amazon-forest.png";
import travel from "../../assets/air-travel.png";
import industry from "../../assets/industrial-polution.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="section-1">
          <h1 className="section-1-h1">
            How big is your environmental footprint?
          </h1>
          <img
            src={foot}
            alt="Carbon Footprint"
            className="section-1-footprint"
          />
          <button className="section-1-button">
            <Link to="../Questionnaire" id="learn-more" >Learn more...</Link>
          </button>
        </section>
        <section className="section-2">
          <img src={amazon} alt="" className="section-2-img" />
          <h2 className="section-2-h2">Food Waste</h2>
          <h4 className="section-2-h4">
            1/3 of all food produced for human consumption is wasted.
            <br />
            <br />
            This accounts for 8% of global greenhouse gas emissions.
          </h4>
        </section>
        <section className="section-3">
          <h2 className="section-3-h2">Travel Miles</h2>
          <h4 className="section-3-h4">
            1/3 of all food produced for human consumption is wasted.
            <br />
            <br />
            This accounts for 8% of global greenhouse gas emissions.
          </h4>
          <img src={travel} alt="aeroplane flying" className="section-3-img" />
        </section>
        <section className="section-4">
          <img
            src={industry}
            alt="industrial waste"
            className="section-4-img"
          />
          <h2 className="section-4-h2">Energy Consumption</h2>
          <h4 className="section-4-h4">
            1/3 of all food produced for human consumption is wasted.
            <br />
            <br />
            This accounts for 8% of global greenhouse gas emissions.
          </h4>
        </section>
      </main>

      <section className="subscribe-1">
        <h2 className="subscribe-1-h2">Join Our Mission</h2>
        <input
          type="text"
          className="subscribe-1-input"
          placeholder="Enter your email here..."
        />
        <button className="subscribe-1-submit">Subscribe</button>
      </section>
    </>
  );
}

export default Home;