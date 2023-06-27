import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
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
};

export default Spinner;
