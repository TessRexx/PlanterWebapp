import "./HomePage.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeCard from "../Components/HomeCard";

function HomePage() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(/IconsandImages/background.png`,
      }}
    >
      <Navbar />
      <h1>The New Zealand Plant Planner made for you</h1>
      <p className="blurb">
        Create your custom planter from our range of vegetable, fruit, and herb
        plants and view their ideal planting months in your own yearly planner
      </p>
      <Link to="/plantselection" className="buttonStart">
        <Button variant="contained" color="secondary">
          Start creating your yearly planner now!
        </Button>
      </Link>
      <div className="cardContainer">
        <HomeCard
          image={"IconsandImages/selection.png"}
          title={"YEARLY PLANNER"}
          info={
            "View the planting months for your favourite fruit and vegetables all year round"
          }
        />
        <HomeCard
          image={"IconsandImages/selection.png"}
          title={"EDIT AND SORT"}
          info={
            "Edit your Planter at any time and sort through our simple lists to find the plants you want"
          }
        />
        <HomeCard
          image={"IconsandImages/selection.png"}
          title={"MONTHLY PLANNING"}
          info={
            "Sign in to your account to save your Planter and stay prepared for the months to come"
          }
        />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
