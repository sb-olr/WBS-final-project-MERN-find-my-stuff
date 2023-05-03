import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import the axios library for making HTTP requests
import axios from "axios";
import "../styles.css";

// Define the SignIn component
function SignIn({ setToken }) {
  // - errorMessages will hold any error messages that occur during form submission
  // - isSubmitted will be set to true when the user successfully logs in
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Define the function that will be called when the user submits the form
  const handleSubmit = async (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the username and password from the form input fields
    const { useremail, pass } = event.target.elements;

    try {
      // Send a POST request to the server with the user's credentials
      const response = await axios.post("http://localhost:8000/api/login", {
        email: useremail.value,
        password: pass.value,
      });

      // Get the JWT token from the response
      const { token } = response.data;
      console.log("token", token);
      console.log("response", response.data);

      // If a token was received, save it in localStorage and set isSubmitted to true
      if (token) {
        localStorage.setItem("token", token);
        setIsSubmitted(true);
        setToken(token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // If there was an error, set errorMessages to the appropriate message
      const { message } = error.response.data;

      if (message.toLowerCase() === "invalid email") {
        setErrorMessages({
          name: "useremail",
          message: "Invalid email.",
        });
      } else if (message === "invalid password") {
        setErrorMessages({
          name: "pass",
          message: "Incorrect password.",
        });
      } else {
        setErrorMessages({
          name: "other",
          message: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  // Define a helper function to render error messages for form fields
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            id="input"
            type="text"
            name="useremail"
            placeholder="Email"
            required
          />
          {renderErrorMessage("useremail")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            id="input"
            type="password"
            name="pass"
            placeholder="Password"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Sign In
          </button>
        </div>
        {renderErrorMessage("other")}
      </form>
    </div>
  );

  // entire component

  useEffect(() => {
    localStorage.clear("token");
  }, []);

  return (
    <div className="signin">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <p>
        New User?
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </p>
    </div>
  );
}
export default SignIn;

