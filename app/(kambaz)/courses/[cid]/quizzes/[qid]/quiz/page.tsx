"use client"
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../client"
import { setQuizzes } from "../../reducer";
import { RootState } from "@/app/(kambaz)/store";
import { Button } from "react-bootstrap";
import QuestionDisplayer from "./QuestionDisplayer";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineArrowRight } from "react-icons/md";

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

export default function Quiz() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});
    const [currentId, setCurrentId] = useState<string>("Begin");
    const [index, setIndex] = useState<number>(0);
    const [quiz, setQuiz] = useState<any>({
        _id: "default",
        questions: [{
            _id: "default"
        }]
    });
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
    useEffect(() => {
        fetchProfile();
        fetchQuizzes();
        fetchOurQuiz();
        }, []);
    return(
        <div className="d-flex flex-column align-items-center border p-2 h-100">
            {(currentId == "Begin") && 
                <Button  className="m-5" onClick={() => {
                    if (quiz.questionNum > 0) {
                        setIndex(1);
                        setCurrentId(quiz.questions[0]._id);
                    }
                }}>Begin Quiz</Button>}
            {quiz.questions.map((ques: any) => 
                <div className="d-flex w-100">
                    {(ques._id == currentId) && 
                        <QuestionDisplayer q={ques}/>
                    }
                </div>) }
            <div className="w-50 d-flex justify-content-end me-5 p-5">
                {((currentId != "Begin") && (currentId != "End")) && <Button onClick={() => {
                    if (index < quiz.questionNum) {
                        setIndex(index + 1);
                        setCurrentId(quiz.questions[index]._id)
                    } else {
                        setCurrentId("End")
                    }                
                }} className="btn-danger">Next <MdOutlineArrowRight/></Button>}
            </div>
            <div className="w-50 d-flex justify-content-end me-2 border p-2">
                <Button className="btn-secondary">Submit Quiz</Button>
            </div>
            <br/><br/><br/><br/>
            {(profile.role === "FACULTY" || profile.role === "ADMIN") && <Button href={`/courses/${cid}/quizzes/${qid}`} className="btn-secondary w-100">
            <FaPencil className="m-1"/>Keep Editing This Quiz</Button>}
        </div>
    )
}