import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeFooter.css";

function HomeFooter() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-around">
        <Link to="/register" className="sign_up">
          <Button
            variant="secondary"
            size="md"
            className="bg-transparent border-0 text-dark"
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/login" className="login">
          <Button
            variant="primary"
            size="md"
            className="bg-transparent border-0 text-white"
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeFooter;
