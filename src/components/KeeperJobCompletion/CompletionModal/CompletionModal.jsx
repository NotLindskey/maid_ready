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
      <div
        className={`modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div
          className={`modal ${isModalOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{props.title}</h2>
          <div className="modal-main-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default CompletionModal;
