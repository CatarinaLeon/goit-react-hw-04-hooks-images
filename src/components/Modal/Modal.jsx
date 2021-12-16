// import { Component } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (event) => {
//     if (event.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = (event) => {
//     if (event.currentTarget === event.target) this.props.onClose();
//   };

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.handleBackdropClick}>
//         <div className={s.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;
