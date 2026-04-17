"use client";
import Link from "next/link";
import QuizzesControls from "./QuizzesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import ControlButtons from "./ControlButtons";
import { redirect, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { useEffect, useState } from "react";
import { setQuizzes } from "./reducer";
import * as client from "./client";
import { IconContext } from "react-icons";
import { IoRocketOutline } from "react-icons/io5";

type QuizType = {
    _id: string,
    title: string,
    avail: string,
    due: string,
    points: number,
    questionNum: number,
    published: boolean
}

export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer)
    const dispatch = useDispatch();
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    const onRemoveQuiz = async (courseId: string, quizId: string) => {
        await client.deleteQuiz(courseId, quizId);
        dispatch(setQuizzes(quizzes.filter((quiz: any) => quiz._id !== quizId)));
    };
    const togglePublishQuiz = async (courseId: string, quizId: string) => {
        const allQuizzes = await client.findQuizzesForCourse(courseId);
        const ourQuiz = allQuizzes.find((qz: QuizType) => (qz._id) == quizId);
        const newPub = !(ourQuiz.published);
        await client.updateQuiz(courseId, {...ourQuiz, published: newPub})
        fetchQuizzes();
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);
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
            <QuizzesControls /> <br /><br /><br /><br />
            <ListGroup className="rounded-0 w-auto" id="wd-quizzes">
                <ListGroupItem className="wd-quizzes p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary fs-6">
                        <BsGripVertical className="fs-3" /> <FaCaretDown className="me-2" /> 
                        <b>QUIZZES</b>
                    </div>
                    <ListGroup id="wd-quiz-entries">
                        {quizzes.map((quiz: QuizType) => (
                            <div>
                                {(quiz.published || profile.role === "FACULTY" || profile.role === "ADMIN") && <ListGroupItem className="wd-quiz-entry p-3">
                                    <div className="d-flex flex-row justify-content-between align-items-center"> 
                                        <div className="w-auto">
                                            <IconContext.Provider value={{ color: "green" }}>
                                                <IoRocketOutline size={30} className="m-2"/>
                                            </IconContext.Provider>
                                        </div>
                                        <div className="flex-fill ps-3">
                                            <Link href={`/courses/${cid}/quizzes/${quiz._id}/details`} className="wd-quiz-link fs-5 text-black text-decoration-none bold">
                                                <b>{quiz.title}</b></Link><br />
                                                <div className="fs-6"><span className="text-danger"> {quiz.avail} </span> |
                                                <b> Due</b> {quiz.due} | {quiz.points} pts | {quiz.questionNum} questions </div></div>                                        
                                        <ControlButtons cid={cid as string} quizId={quiz._id} 
                                        deleteQuiz={() => onRemoveQuiz(cid as string, quiz._id)} 
                                        togglePublishQuiz={() => togglePublishQuiz(cid as string, quiz._id)} published={quiz.published} />
</div> </ListGroupItem>} </div>))} </ListGroup> </ListGroupItem> </ListGroup> </div>);
}