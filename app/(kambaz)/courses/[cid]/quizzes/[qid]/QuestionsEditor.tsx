import { RootState } from "@/app/(kambaz)/store";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { Dispatch, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import QuesEditor from "./QuesEditor";
import { v4 as uuidv4 } from "uuid";

type QuizType = {
    _id: string,
    title: string,
    due: string,
    points: number,
    questionNum: number,
    published: boolean,
    type: string,
    assignmentGroup: string,
    shuffleAnswers: boolean,
    timeLimit: boolean,
    timeLimitAmt: number
    questions: [{
        _id: string,
        title: string,
        question: string,
        type: string,
        points: any,
        choices: ChoiceType[]
    }]
}

type QuestionType = {
    _id: string,
    title: string,
    question: string,
    type: string,
    points: number,
    choices: ChoiceType[]
}

type ChoiceType = {
    _id: string, text: string, correct: boolean
}

export default function QuestionsEditor({q, setQuiz, onCreateQuizForCourse, onUpdateQuizzes }: 
    {q: QuizType; setQuiz: Dispatch<any>; onCreateQuizForCourse: ((publish: boolean) => Promise<void>); onUpdateQuizzes: ((publish: boolean) => Promise<void>);}) {
    const {cid, qid} = useParams();
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
            {q.questions.map((ques) => 
            <div className="d-flex justify-content-center">
                <QuesEditor q={q as QuizType} ques={ques as QuestionType} setQuiz={setQuiz}/>
            </div>) }
            <div className="d-flex justify-content-center m-2">
                <Button className="btn-warning" onClick={() => setQuiz({...q, questions: [
                    ...q.questions,
                    {
                        "_id": uuidv4(),
                        "title": "New Question",
                        "type": "Multiple Choice",
                        "points": 0,
                        "question": "Type Question Here",
                        "choices": []
                    }
                ]})}><FiPlus/> New Question</Button>
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-end">
                <Link href={`/courses/${ cid }/quizzes`}>
                    <Button variant="secondary" size="lg" className="me-1 float-end"> Cancel </Button>
                    {(qid === "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                    onClick={() => onCreateQuizForCourse(false)}> Save </Button>)}
                    {(qid !== "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                    onClick={() => onUpdateQuizzes(false)}> Save </Button>)}
                </Link>
            </div>
        </div>
    );
}