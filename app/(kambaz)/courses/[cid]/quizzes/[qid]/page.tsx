'use client'
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "next/navigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import { setQuizzes } from "../reducer";
import * as client from "../client";

type QuizType = {
    _id: string,
    title: string,
    description: string,
    due: string,
    points: number,
    questionNum: number,
    published: boolean,
    type: string,
    assignmentGroup: string,
    shuffleAnswers: boolean,
    timeLimit: boolean,
    timeLimitAmt: number,
    from: string,
    until: string,
    questions: [{_id: string, title: string}]
}

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);  
    const [q, setQuiz] = useState<any>({
            "title": "New Quiz",
            "description" : "NEW DESCRIPTION",
            "course" : cid,
            "type": "Graded Quiz",
            "assignmentGroup": "Quizzes",
            "shuffleAnswers": true,
            "published": false,
            "timeLimit": true,
            "timeLimitAmt": 20,
            "questions": []
    });  
    const dispatch = useDispatch(); 
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };
    const fetchOurQuiz = async () => {
        if (qid != "new") {
            const allQuizzes = await client.findQuizzesForCourse(cid as string);
            const ourQuiz = allQuizzes.find((qz: QuizType) => (qz._id) == qid);
            setQuiz(ourQuiz);
        }
    };
    useEffect(() => {
        fetchOurQuiz();
        fetchQuizzes();
        }, []);   
    const onCreateQuizForCourse = async (publish: boolean) => {
        if (!cid) return;
        let ourQuiz;
        {(publish) ? ourQuiz = {...q, published: true} : ourQuiz = q}
        const quiz = await client.createQuizForCourse(cid as string, ourQuiz);
        dispatch(setQuizzes([...quizzes, quiz]));
    };
    const onUpdateQuizzes = async (publish: boolean) => {
        let ourQuiz;
        {(publish) ? ourQuiz = {...q, published: true} : ourQuiz = q}
        await client.updateQuiz(cid as string, ourQuiz);
        const newQuizzes = quizzes.map((a: any) => a._id === q._id ? q : a );
        dispatch(setQuizzes(newQuizzes));
    };   
    return (
        <div id="wd-quizzes-editor">
            <p>{q.title}</p>
            <Tabs defaultActiveKey="details">
                <Tab eventKey="details" title="Details">
                    <br/>
                    <DetailsEditor q={q} setQuiz={setQuiz} onCreateQuizForCourse={onCreateQuizForCourse} onUpdateQuizzes={onUpdateQuizzes}/>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <br/>
                    <QuestionsEditor q={q} setQuiz={setQuiz} onCreateQuizForCourse={onCreateQuizForCourse} onUpdateQuizzes={onUpdateQuizzes}/>
                </Tab>
            </Tabs>
        </div>
    );
}