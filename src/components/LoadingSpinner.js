import React from "react";
import "./LoadingSpinner.css";
import {Row} from "react-bootstrap";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}