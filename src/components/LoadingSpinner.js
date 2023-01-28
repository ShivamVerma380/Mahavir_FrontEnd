import React from "react";
import "./LoadingSpinner.css";
import {Container} from "react-bootstrap";

export default function LoadingSpinner() {
  return (
    <Container className="spinner-container">
      <div className="loading-spinner"></div>
    </Container>
  );
}