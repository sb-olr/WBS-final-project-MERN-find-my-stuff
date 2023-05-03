import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function SignUp({ setToken }) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, pass } = event.target.elements;
    console.log(email.value);

    try {
      const response = await axios.post("http://localhost:3001/login", {
        name: name.value,
        email: email.value,
        password: pass.value,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setIsSubmitted(true);
        setToken(localStorage.getItem("token"));
        navigate("/");
      }
    } catch (error) {
      const { message } = error.response.data;

      if (message === "username taken") {
        setErrorMessages({
          name: "name",
          message: "This email is already taken. Please use a different email.",
        });
      } else if (message === "invalid email format") {
        setErrorMessages({
          name: "email",
          message: "Invalid email format. Please use a valid email address.",
        });
      } else {
        setErrorMessages({
          name: "pass",
          message: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>
          <input
            id="input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          {renderErrorMessage("name")}
        </div>

        <div className="input-container">
          <label>Email </label>
          <input
            id="input"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          {renderErrorMessage("email")}
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
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="signin">
      <div className="login-form">
        {isSubmitted ? (
          <div>User is successfully signed up</div>
        ) : (
          <div>
            {/* <div className="title">Sign Up</div> */}
            {renderForm}
          </div>
        )}
      </div>
      <p>
        Already have an account?
        <Link to="/signin">
          <span>Sign In</span>
        </Link>
      </p>
    </div>
  );
}
export default SignUp;

// export default SignUp;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles.css";

// function SignUp({ setToken }) {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, pass } = event.target.elements;

//     try {
//       const response = await axios.post("http://localhost:3001/signup", {
//         useremail: email.value,
//         password: pass.value,
//       });

//       const { token } = response.data;

//       if (token) {
//         localStorage.setItem("token", token);
//         setIsSubmitted(true);
//         setToken(localStorage.getItem("token"));
//         navigate("/");
//       }
//     } catch (error) {
//       const { message } = error.response.data;

//       if (message === "username taken") {
//         setErrorMessages({
//           name: "email",
//           message: "This email is already taken. Please use a different email.",
//         });
//       } else if (message === "invalid password") {
//         setErrorMessages({
//           name: "pass",
//           message:
//             "Invalid password. Password should be at least 6 characters long.",
//         });
//       } else if (message === "invalid email format") {
//         setErrorMessages({
//           name: "email",
//           message: "Invalid email format. Please use a valid email address.",
//         });
//       } else {
//         setErrorMessages({
//           name: "email",
//           message: "An unexpected error occurred. Please try again later.",
//         });
//       }
//     }
//   };

//   const renderErrorMessage = (fieldName, errorMessage) => {
//     const errorExists =
//       errorMessages[fieldName] && errorMessages[fieldName] === errorMessage;

//     return errorExists ? <div className="error">{errorMessage}</div> : null;
//   };

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Email </label>
//           <input type="text" name="email" placeholder="Email" required />
//           {renderErrorMessage(
//             "email",
//             "This email is already taken. Please use a different email."
//           )}
//           {renderErrorMessage(
//             "email",
//             "Invalid email format. Please use a valid email address."
//           )}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" placeholder="Password" required />
//           {renderErrorMessage(
//             "pass",
//             "Invalid password. Password should be at least 6 characters long."
//           )}
//         </div>
//         <div className="button-container">
//           <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="Login">
//       <div className="login-form">
//         {isSubmitted ? (
//           <div>User is successfully signed up</div>
//         ) : (
//           <div>
//             <div className="title">Sign Up</div>
//             {renderForm}
//           </div>
//         )}
//       </div>
//       <p>
//         Already have an account?
//         <Link to="/signin">
//           <span>Sign In</span>
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default SignUp;
