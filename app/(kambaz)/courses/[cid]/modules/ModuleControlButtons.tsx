import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { RootState } from "@/app/(kambaz)/store";
export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule } : 
  { moduleId: string, deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }
) {
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
      {profile.user === "FACULTY" && <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-2" />}
      {profile.role === "FACULTY" && <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>}
      <GreenCheckmark />
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div> );}