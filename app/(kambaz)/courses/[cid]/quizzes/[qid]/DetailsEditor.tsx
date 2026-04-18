import { RootState } from "@/app/(kambaz)/store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "../reducer";
import * as client from "../client";
import Link from "next/link";

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
}

export default function DetailsEditor({ cid, qid }: { cid: string; qid: string;}) {
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer); 
    const dispatch = useDispatch();  
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
    });
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});
    const fetchProfile = () => {
        if (!currentUser) return redirect("/account/signin");
        setProfile(currentUser);
        };
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid);
        dispatch(setQuizzes(quizzes));
    };
    const fetchOurQuiz = async () => {
        if (qid != "new") {
            const allQuizzes = await client.findQuizzesForCourse(cid);
            const ourQuiz = allQuizzes.find((qz: QuizType) => (qz._id) == qid);
            setQuiz(ourQuiz);
        }
    };
    useEffect(() => {
        fetchProfile();
        fetchOurQuiz();
        fetchQuizzes();
        }, []);
    const onCreateQuizForCourse = async (publish: boolean) => {
        if (!cid) return;
        let ourQuiz;
        {(publish) ? ourQuiz = {...q, published: true} : ourQuiz = q}
        const quiz = await client.createQuizForCourse(cid, ourQuiz);
        dispatch(setQuizzes([...quizzes, quiz]));
    };
    const onUpdateQuizzes = async (publish: boolean) => {
        let ourQuiz;
        {(publish) ? ourQuiz = {...q, published: true} : ourQuiz = q}
        await client.updateQuiz(cid, ourQuiz);
        const newQuizzes = quizzes.map((a: any) => a._id === q._id ? q : a );
        dispatch(setQuizzes(newQuizzes));
    };
    return(
        <div>
        <Form>
            <Form.Group>
                <FormLabel htmlFor="wd-name">Quiz Name</FormLabel><br />
                <FormControl id="wd-name" value={q.title} 
                onChange={(e) => setQuiz({ ...q, title: e.target.value})}/><br />
                <FormControl as="textarea" rows={5} value= {q.description}
                onChange={(e) => setQuiz({ ...q, description: e.target.value})}/><br /><br />
            </Form.Group>
            <Row className="justify-content-center">
                <Col className="text-end"><FormLabel htmlFor="wd-points">Points</FormLabel></Col>
                <Col><FormControl id="wd-points" defaultValue={q.points} type="number"
                onChange={(e) => setQuiz({ ...q, points: e.target.value })}/></Col>
            </Row> <br />
            <Row className="justify-content-center">
                <Col className="text-end"><FormLabel htmlFor="wd-quiz-type">Quiz Type</FormLabel></Col>
                <Col><FormSelect id="wd-quiz-type" onChange={(e) => setQuiz({...q, type: e.target.value})}>
                    {(q.type == "Graded Quiz") ? 
                        <option selected value="Graded Quiz">Graded Quiz</option> : 
                        <option value="Graded Quiz">Graded Quiz</option>}
                    {(q.type == "Practice Quiz") ? 
                        <option selected value="Practice Quiz">Practice Quiz</option> : 
                        <option value="Practice Quiz">Practice Quiz</option>}
                    {(q.type == "Graded Survey") ? 
                        <option selected value="Graded Survey">Graded Survey</option> : 
                        <option value="Graded Survey">Graded Survey</option>}
                    {(q.type == "Ungraded Survey") ? 
                        <option selected value="Ungraded Survey">Ungraded Survey</option> : 
                        <option value="Ungraded Survey">Ungraded Survey</option>}
                </FormSelect> </Col>
            </Row> <br />
            <Row className="justify-content-center">
                <Col className="text-end"><FormLabel htmlFor="wd-assignment-group">Quiz Group</FormLabel></Col>
                <Col><FormSelect id="wd-assignment-group" onChange={(e) => setQuiz({...q, assignmentGroup: e.target.value})}>
                    {(q.assignmentGroup == "Quizzes") ? 
                        <option selected value="Quizzes">Quizzes</option> : 
                        <option value="Quizzes">Quizzes</option>}
                    {(q.assignmentGroup == "Exams") ? 
                        <option selected value="Exams">Exams</option> : 
                        <option value="Exams">Exams</option>}
                    {(q.assignmentGroup == "Assignments") ? 
                        <option selected value="Assignments">Assignments</option> : 
                        <option value="Assignments">Assignments</option>}
                    {(q.assignmentGroup == "Projects") ? 
                        <option selected value="Projects">Projects</option> : 
                        <option value="Projects">Projects</option>}
                </FormSelect></Col>
            </Row> <br />
            <Row className="justify-content-center">
                <Col className="text-end"><FormLabel htmlFor="wd-shuffle-answers">Shuffle Answers</FormLabel></Col>
                <Col><FormCheck id="wd-shuffle-answers" checked={q.shuffleAnswers} onChange={(e) => setQuiz({...q, shuffleAnswers: e.target.checked})}/></Col>
            </Row><br />
            <Row className="justify-content-center">
                <Col className="text-end"><FormLabel htmlFor="wd-time-limit">Time Limit</FormLabel></Col>
                <Col>
                    <FormCheck id="wd-time-limit" checked={q.timeLimit} onChange={(e) => setQuiz({...q, timeLimit: e.target.checked})}/>
                </Col>
            </Row><br />
            {(q.timeLimit) && 
            <div>
                <Row className="justify-content-center">
                    <Col className="text-end"><FormLabel htmlFor="wd-time-limit-amt">Time Limit Amount (Minutes)</FormLabel></Col>
                    <Col><FormControl id="wd-time-limit-amt" defaultValue={q.timeLimitAmt} type="number"
                    onChange={(e) => setQuiz({ ...q, timeLimitAmt: e.target.value })}/></Col>
                </Row>
                <br />
            </div>}
            <Row className="justify-content-center">
                <Col className="text-end"><FormLabel htmlFor="wd-submission-type">Dates</FormLabel></Col>
                <Col className="border p-1 rounded">
                    <Form.Group>
                        <FormLabel><b>Due</b></FormLabel>
                        <FormControl type="datetime-local" defaultValue={q.due}
                        onChange={(e) => setQuiz({ ...q, due: e.currentTarget.value })}/>
                    </Form.Group> <br />
                    <div className="d-flex flex-row">
                        <Form.Group>
                            <FormLabel><b>Available from</b></FormLabel>
                            <FormControl type="datetime-local" defaultValue={q.from}
                            onChange={(e) => setQuiz({ ...q, from: e.target.value })}/>
                        </Form.Group> <br />
                        <Form.Group>
                            <FormLabel><b>Until</b></FormLabel>
                            <FormControl type="datetime-local" defaultValue={q.until}
                            onChange={(e) => setQuiz({ ...q, until: e.target.value })}/>
                        </Form.Group> <br />
                    </div>
                </Col>
            </Row><br />
        </Form>
        <hr/>
        <div className="d-flex flex-row justify-content-end">
            <Link href={`/courses/${ cid }/quizzes`}>
                <Button variant="secondary" size="lg" className="me-1 float-end"> Cancel </Button>
                {(qid === "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                onClick={() => onCreateQuizForCourse(false)}> Save </Button>)}
                {(qid !== "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                onClick={() => onUpdateQuizzes(false)}> Save </Button>)}
                {(qid === "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                onClick={() => onCreateQuizForCourse(true)}> Save & Publish </Button>)}
                {(qid !== "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                onClick={() => onUpdateQuizzes(true)}> Save & Publish </Button>)}
            </Link>
        </div> 
        </div>
    );
}