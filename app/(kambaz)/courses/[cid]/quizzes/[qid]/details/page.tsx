"use client"
import { RootState } from "@/app/(kambaz)/store";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../client";
import { setQuizzes } from "../../reducer";

type QuizType = {
    _id: string,
    title: string,
    avail: string,
    due: string,
    points: number,
    questionNum: number,
    published: boolean,
    questions: QuestionType[]
}

type QuestionType = {
    _id: string,
    title: string,
    question: string,
    type: string,
    points: any,
    choices: ChoiceType[]
}

type ChoiceType = {
    _id: string, text: string, correct: boolean
}

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});
    const [quiz, setQuiz] = useState<any>({});
    const dispatch = useDispatch();
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    const fetchProfile = () => {
        if (!currentUser) return redirect("/account/signin");
            setProfile(currentUser);
        };
    const fetchOurQuiz = async () => {
        const allQuizzes = await client.findQuizzesForCourse(cid as string);
        const ourQuiz = allQuizzes.find((qz: QuizType) => (qz._id) == qid);
        setQuiz(ourQuiz);
    };
    const togglePublishQuiz = async () => {
            const newPub = !(quiz.published);
            await client.updateQuiz(cid as string, {...quiz, published: newPub})
            fetchOurQuiz();
        };
    useEffect(() => {
        fetchProfile();
        fetchQuizzes();
        fetchOurQuiz();
        }, []);
    return(
        <div className="d-flex justify-content-center">
            {(profile.role === "FACULTY" || profile.role === "ADMIN") ? (
                <div className="w-50">
                    <div className="border border-secondary">
                        <div className="d-flex justify-content-center border p-2">
                            <Button className="m-1 btn-light btn-outline-dark" href={`/courses/${cid}/quizzes/${qid}/quiz`}>Preview</Button>
                            <Link href={`/courses/${cid}/quizzes/${qid}`}>
                                <Button className="m-1 btn-light btn-outline-dark"><FaPencil/> Edit </Button>
                            </Link>
                        </div>
                        <h3 className="m-3">{quiz.title}</h3>
                        <Row>
                            <Col className="text-end"><b>Quiz Type</b></Col>
                            <Col>{quiz.type}</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Points</b></Col>
                            <Col>{quiz.points}</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Assignment Group</b></Col>
                            <Col>{quiz.assignmentGroup}</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Shuffle Answers</b></Col>
                            <Col>{(quiz.shuffleAnswers) ? <p>Yes</p> : <p>No</p>}</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Time Limit</b></Col>
                            <Col>{(quiz.timeLimit) ? <p>{quiz.timeLimitAmt} minutes</p> : <p>None</p>}</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Multiple Attempts</b></Col>
                            <Col>{quiz.multipleAttempts}X</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Show Correct Answers</b></Col>
                            <Col>Immediately</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>One Question At A Time</b></Col>
                            <Col>Yes</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Webcam Required</b></Col>
                            <Col>No</Col>
                        </Row>
                        <Row>
                            <Col className="text-end"><b>Lock Questions After Answering</b></Col>
                            <Col>No</Col>
                        </Row> <br/>
                        <div className="d-flex justify-content-between"> 
                            <p className="m-2"><b>Due:</b> {quiz.due}</p>
                            <p className="m-2"><b>Available From:</b> {quiz.from}</p>
                            <p className="m-2"><b>Until:</b> {quiz.until}</p>
                            {(quiz.published) ? 
                                <Button className="mb-3 btn-danger m-1" onClick={togglePublishQuiz}>Unpublish</Button> :
                                <Button className="mb-3 btn-success m-1" onClick={togglePublishQuiz}>Publish</Button>}
                        </div>
                    </div> <br/>   
                </div>
            ) : (
                <Button className="btn-light" href={`/courses/${cid}/quizzes/${qid}/quiz`}>Take Quiz</Button>
            )}
        </div>
    );
}