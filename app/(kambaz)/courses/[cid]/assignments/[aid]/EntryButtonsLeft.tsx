'use client'
import { IconContext } from "react-icons";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
export default function EntryButtonsLeft() {
  return (
    <div className="w-auto">
      <BsGripVertical className="me-2 fs-3" />
      <IconContext.Provider value={{ color: "green" }}>
        <MdOutlineAssignment />
      </IconContext.Provider>
    </div> );}