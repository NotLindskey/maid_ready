import "./CompletionModal.css";
function CompletionModal(props) {
  const { isModalOpen, onCloseModal, page, noPadding } = props;

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
          className={`modal ${isModalOpen ? "open" : ""} ${
            page === "complete" ? "modal-complete" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
          style={noPadding ? { padding: "0px" } : {}}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CompletionModal;
