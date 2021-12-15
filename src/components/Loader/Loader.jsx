import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

const applyLoader = () => {
  return (
    <Loader
      className={s.Loader}
      type="Circles"
      color="#3f51b5"
      height={80}
      width={80}
      timeout={5000}
    />
  );
};
export default applyLoader;
