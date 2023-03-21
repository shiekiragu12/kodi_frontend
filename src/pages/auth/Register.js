import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { serverUrl } from "../../serverUrl";

function Register() {
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

    //check if password and confirm password match
    if (formData.password !== formData.confirmPassword)
      return alert("passwords dont match");

    console.log(formData);

    try {
      serverUrl
        .post("/users/register/", {
          email: formData.email,
          full_name: formData.fullname,
          phone_number: formData.phoneNumber,
          password: formData.password,
          gender: formData.gender,
        })
        .then((res) => {
          serverUrl
            .post("/users/login/", {
              phone_number: formData.phoneNumber,
              password: formData.password,
            })
            .then((res) => {
              window.location = "/login";
            });
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="custom-back-button" />
      <h2>Create an account with Kodi</h2>
      <p className="text-muted">Best tool to manage your property</p>
      <Form onSubmit={handleSubmit}>
        <div className="input-icons">
          <i className="fa fa-user icon"></i>
          <input
            className="input-field"
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-icons">
          <i className="fa fa-envelope icon"></i>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="genderRadio">
          <div className="radioProperty">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="radioProperty">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
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
        <div className="input-icons">
          <i className="fa fa-lock icon"></i>
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
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
        <Button variant="primary" type="submit" className="nextBtn">
          Next
        </Button>
      </Form>
    </div>
  );
}

export default Register;
