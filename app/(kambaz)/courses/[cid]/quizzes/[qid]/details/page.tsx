"use client"
import { RootState } from "@/app/(kambaz)/store";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function QuizDetails() {
    const { cid, qid } = useParams();
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
        <div>
            {(profile.role === "FACULTY" || profile.role === "ADMIN") ? (
                <div>
                    <Container className="border border-secondary">
                        <div className="d-flex justify-content-center">
                            <Button className="m-1 btn-light btn-outline-dark">Preview</Button>
                            <Button className="m-1 btn-light btn-outline-dark"> 
                                <Link href={`/courses/${cid}/quizzes/${qid}`}>
                                    <FaPencil/> Edit 
                                </Link></Button>
                        </div>
                        <h3>QUIZ TITLE</h3>
                        <Row>
                            <Col className="text-end">Quiz Type</Col>
                            <Col>X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Points</Col>
                            <Col>X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Assignment Group</Col>
                            <Col>X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Shuffle Answers</Col>
                            <Col>X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Time Limit</Col>
                            <Col>X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Multiple Attempts</Col>
                            <Col>X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Show Correct Answers</Col>
                            <Col>Immediately</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">One Question At A Time</Col>
                            <Col>Yes</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Webcam Required</Col>
                            <Col>No</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">Lock Questions After Answering</Col>
                            <Col>No</Col>
                        </Row> <br/>
                        <div className="d-flex justify-content-between"> 
                            <p>Due: </p>
                            <p>For: </p>
                            <p>Available From: </p>
                            <p>Until: </p>
                            <Button className="mb-3 btn-success">Publish/Unpublish</Button> 
                        </div>
                    </Container> <br/>   
                </div>
            ) : (
                <Button className="btn-light" href={`/courses/${cid}/quizzes/${qid}/quiz`}>Take Quiz</Button>
            )}
        </div>
    );
}