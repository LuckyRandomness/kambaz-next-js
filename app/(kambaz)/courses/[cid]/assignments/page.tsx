"use client";
import Link from "next/link";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import EntryButtonsLeft from "./EntryButtonsLeft";
import { useParams } from "next/navigation";
import { deleteAssignment } from ".";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useEffect } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const { assignments } = useSelector((state: RootState) => state.assignmentReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser) {console.log("empty")};
        console.log(currentUser?.firstName);
    }, []);
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
                                                <div className="fs-6"><span className="text-danger"> Multiple Modules </span> | <b>Not available until</b> {asgn.from} | <br />
                                                <b>Due</b> {asgn.due} | {asgn.points} pts</div></div>                                        
                                        <LessonControlButtons assignmentId={asgn._id} deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))} />
</div> </ListGroupItem> ))} </ListGroup> </ListGroupItem> </ListGroup> </div>);
}