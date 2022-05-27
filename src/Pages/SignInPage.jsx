import "../Components/SignIn&UpForm.css";
import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { UserAuth } from "../Contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function SignInPage({ setIsAuth }) {
  // Setting createUser
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  // States for sign up info
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Submission Errors or Redirection to Planner Page
  const handleSubmit = async (err) => {
    err.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/planner");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(/IconsandImages/background.png`,
      }}
    >
      <Navbar />
      <div className="formContainer">
        <img className="logo" src="/logo 184x62px.png" alt="" />
        <form onSubmit={handleSubmit}>
          <h2>SIGN IN</h2>
          <p>
            Don't have an account? <Link to="/signup">Sign Up!</Link>
          </p>
          <div className="formGroup">
            <TextField
              fullWidth
              label="Email"
              type="text"
              name="email"
              // Calling a function to update setDetails by passing details entered
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              // Calling a function to update setDetails by passing details entered
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgotPassword">
            <Link to="/">Forgot Password?</Link>
          </div>
          {error !== "" ? (
            <div className="error"> {error} </div>
          ) : (
            ""
          ) /*Firebase Error Message*/}

          <div className="submitButton">
            <Button variant="contained" color="secondary" type="submit">
              SIGN IN
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
