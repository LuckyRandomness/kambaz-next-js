import { Modal, FormControl, Button } from "react-bootstrap";
export default function ModuleEditor({ show, handleClose, dialogTitle, assignmentId, deleteAssignment,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <p>Are you sure you want to remove this assignment?</p>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      deleteAssignment(assignmentId);
      handleClose();
     }} > Ok </Button>
   </Modal.Footer>
  </Modal>
);}
