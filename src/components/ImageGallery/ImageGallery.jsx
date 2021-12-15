import PropTypes from "prop-types";
import st from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ gallery, onClick }) {
  return (
    <ul className={st.ImageGallery} onClick={onClick}>
      {gallery.map((item) => (
        <ImageGalleryItem key={item.id} image={item} />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
