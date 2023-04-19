import "./CompletionModal.css";
import { useState } from "react";
function CompletionModal(props) {
  const { isModalOpen, onCloseModal } = props;

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  }

  return (
    <div>
      <div className={`modal-overlay ${isModalOpen ? "open" : ""}`}>
        <div
          className={`modal ${isModalOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{props.title}</h2>
          <p>{props.children}</p>
          <button onClick={onCloseModal} className="btn">
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompletionModal;
