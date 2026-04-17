import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useEffect, useState } from "react";

export default function QuizzesControls() {
    const {cid} = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});
    const fetchProfile = () => {
        if (!currentUser) return redirect("/account/signin");
        setProfile(currentUser);
        };
    useEffect(() => {
        fetchProfile();
        }, []);
    return(
        <div id="wd-quizzes-control" className="text-nowrap">
            <InputGroup className="float-start w-50">
                <InputGroupText><CiSearch /></InputGroupText>
                <FormControl placeholder="Search..."/>
            </InputGroup>
            {(profile.role === "FACULTY" || profile.role === "ADMIN") && <Link href={`/courses/${cid}/quizzes/new`}>
                <Button size="lg" className="me-1 float-end btn-danger" id="wd-quiz-btn">
                <BsPlus className="fs-3" /> Quiz</Button></Link>}
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-group-btn">
                <BsPlus className="fs-3" /> Group
            </Button>
        </div>
    );}