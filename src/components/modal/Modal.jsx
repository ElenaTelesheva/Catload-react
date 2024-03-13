import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SmartSelect from "../select/SmartSelect";

import { useState } from "react";

const SourceModal = ({ showModal, setShowModal }) => {
  const [showSourceOptions, setShowSourceOptions] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    setShowSourceOptions(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cat source</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SmartSelect showSourceOptions={showSourceOptions} setShowSourceOptions={setShowSourceOptions} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Save source
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SourceModal;
