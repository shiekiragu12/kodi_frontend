import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const digitCount = formData.phoneNumber.replace(/[^0-9]/g, "").length; // Count only digits

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //submit user details fuction
  function handleSubmit(e) {
    // prevent form from redirecting to another page
    e.preventDefault();

    console.log(formData);

    // try {
    //   axios
    //     .post("https://kodinyumba.app/api/users/login/", {
    //       phone_number: formData.phoneNumber,
    //       password: formData.password,
    //     })
    //     .then((res) => {
    //       window.location = "/login";
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div>
      <div className="custom-back-button" />
      <h2>Welcome Back to Kodi</h2>
      <p className="text-muted">Best tool to manage your property</p>
      <Form onSubmit={handleSubmit}>
        <div className="input-icons">
          <i className="fa fa-phone icon"></i>
          <input
            className="input-field"
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <p
          style={{
            fontSize: "12px",
            paddingRight: "20px",
            float: "right",
          }}
        >
          {digitCount}/10
        </p>

        <div className="input-icons">
          <i className="fa fa-lock icon"></i>
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <Link to="/" className="forgotPassword">
          Forgot Password?
        </Link>

        <Button variant="primary" type="submit" className="loginBtn">
          Login
        </Button>
        <h5 className="text-muted noAccount">
          Don't have an account?{" "}
          <Link to="/register" className="toSignUp">
            SIGN UP
          </Link>
        </h5>

        <div className="termsAndConditions">
          <h6>By creating an account, you are agreeing to our</h6>

          <h6>
            <Link to="/" className="terms">
              Terms & Conditions
            </Link>{" "}
            and
            <Link to="/" className="privatePolicy">
              {" "}
              Privacy Policy
            </Link>
          </h6>
        </div>
      </Form>
    </div>
  );
}

export default Login;
