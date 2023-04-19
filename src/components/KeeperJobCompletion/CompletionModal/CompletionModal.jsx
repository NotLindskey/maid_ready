import "./CompletionModal.css";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay" onClick={handleClick}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <button onClick={handleClick}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
