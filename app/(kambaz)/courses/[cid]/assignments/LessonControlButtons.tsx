import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import DeleteDialog from "./DeleteDialog";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { redirect } from "next/navigation";
export default function LessonControlButtons({ assignmentId, deleteAssignment }: 
  { assignmentId: string; deleteAssignment: ((assignmentId: string) => void );}) {
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
      {(profile.role === "FACULTY" || profile.role === "ADMIN") && <FaTrash className="text-danger me-2 mb-1" onClick={handleShow} />}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <DeleteDialog show={show} handleClose={handleClose} dialogTitle="Delete Assignment"
      assignmentId={assignmentId} deleteAssignment={deleteAssignment}></DeleteDialog>
    </div> );}