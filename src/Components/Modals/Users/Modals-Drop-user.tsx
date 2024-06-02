import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface MDeleteUserProps {
  show: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const MDeleteUser: React.FC<MDeleteUserProps> = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="delete-user-modal-title"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center justify-content-center">
        <h2>Eliminar Usuario</h2>
        <p>¿Estás seguro de que deseas eliminar este usuario?</p>
        

      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="danger" onClick={handleDelete}>
          Eliminar
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDeleteUser;
