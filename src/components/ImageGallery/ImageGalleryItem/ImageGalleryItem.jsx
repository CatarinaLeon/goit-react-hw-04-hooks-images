import React from "react";
import PropTypes from "prop-types";
import st from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image: { id, webformatURL, largeImageURL } }) {
  return (
    <li className={st.ImageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt=""
        data-source={largeImageURL}
        className={st.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
