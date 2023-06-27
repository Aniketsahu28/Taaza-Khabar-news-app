import React, { Component } from "react";
import loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img
          className="h-5"
          src={loading}
          alt="loading"
          style={{ width: "80px" }}
        />
      </div>
    );
  }
}
