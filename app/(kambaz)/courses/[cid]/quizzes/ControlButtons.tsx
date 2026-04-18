import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { redirect } from "next/navigation";
import { IoEllipsisVertical } from "react-icons/io5";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import DeleteDialog from "./DeleteDialog";
import PublishControls from "./PublishControls";
export default function ControlButtons({ cid, quizId, deleteQuiz, togglePublishQuiz, published}: 
  { cid: string; quizId: string; deleteQuiz: ((quizId: string) => void ); togglePublishQuiz: ((courseId: string, quizId: string) => void ); published: boolean}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [profile, setProfile] = useState<any>({});
  const fetchProfile = () => {
      if (!currentUser) return redirect("/account/signin");
      setProfile(currentUser);
    };
  useEffect(() => {
      fetchProfile();
    }, []);
  return (
    <div className="float-end">
      {(profile.role === "FACULTY" || profile.role === "ADMIN") && (
        <div className="d-flex flex-row justify-content-between align-items-center">
          <PublishControls togglePublishQuiz={togglePublishQuiz} cid={cid} quizId={quizId} published={published} />
          <Dropdown>
            <DropdownToggle className="btn-light btn-sm"><IoEllipsisVertical className="m-3" onClick={handleShow} /></DropdownToggle>
            <DropdownMenu>
              <DropdownItem href={`/courses/${cid}/quizzes/${quizId}`}>Edit Quiz</DropdownItem>
              <DropdownItem onClick={handleShow}>Delete Quiz</DropdownItem>
              {published ? <DropdownItem onClick={() => togglePublishQuiz(cid, quizId)}>Unpublish Quiz</DropdownItem> : 
                <DropdownItem onClick={() => togglePublishQuiz(cid, quizId)}>Publish Quiz</DropdownItem>}
              <DropdownItem>Copy Quiz</DropdownItem>
              <DropdownItem>Sort Quiz</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DeleteDialog show={show} handleClose={handleClose} dialogTitle="Delete Quiz"
                quizId={quizId} deleteQuiz={deleteQuiz}></DeleteDialog>
        </div>
      )}
    </div> );}