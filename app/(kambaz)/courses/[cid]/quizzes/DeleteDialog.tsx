import { Modal, Button } from "react-bootstrap";
export default function ModuleEditor({ show, handleClose, dialogTitle, quizId, deleteQuiz,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; quizId: string; deleteQuiz: (quizId: string) => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <p>Are you sure you want to remove this quiz?</p>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      deleteQuiz(quizId);
      handleClose();
     }} > Ok </Button>
   </Modal.Footer>
  </Modal>
);}
