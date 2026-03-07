"use client";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../../modules/LessonControlButtons";
import EntryButtonsLeft from "./EntryButtonsLeft";
import { useParams } from "next/navigation";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useState } from "react";

export default function Assignments() {
    const { cid, aid } = useParams();
    const [assignmentName, setAssignmentName] = useState("");
    const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
    const dispatch = useDispatch();
    return(
        <div>
            <AssignmentsControls /> <br /><br /><br /><br />
            <ListGroup className="rounded-0 w-auto" id="wd-assignments">
                <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary fs-6">
                        <BsGripVertical className="fs-3" /> <FaCaretDown className="me-2" /> 
                        <b>ASSIGNMENTS</b> <AssignmentControlButtons />
                    </div>
                    <ListGroup id="wd-assignment-entries">
                        {assignments
                            .filter((asgn: any) => (asgn.course === cid))
                            .map((asgn) => (
                                <ListGroupItem className="wd-assignment-entry p-3 ps-1">
                                    <div className="d-flex flex-row justify-content-between align-items-center"> 
                                        <EntryButtonsLeft />
                                        <div className="flex-fill ps-3">
                                            <Link href={`/courses/${cid}/assignments/${asgn._id}`} className="wd-assignment-link fs-5 text-black text-decoration-none bold">
                                                <b>{asgn.title}</b></Link><br />
                                                <div className="fs-6"><span className="text-danger"> Multiple Modules </span> | <b>Not available until</b> May 6 at 12:00am | <br />
                                                <b>Due</b> May 13 at 11:59pm | 100 pts</div></div>
                                        <LessonControlButtons assignmentId={asgn._id} deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))} />
</div> </ListGroupItem> ))} </ListGroup> </ListGroupItem> </ListGroup> </div>);
}