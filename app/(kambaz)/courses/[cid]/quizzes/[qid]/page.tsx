'use client'
import { Button, Col, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import { setQuizzes } from "../reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";
import * as client from "../client";

type QuizType = {
    _id: string,
    title: string,
    due: string,
    points: number,
    questionNum: number,
    published: boolean,
}

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer)
    const dispatch = useDispatch();
    const firstQuiz = quizzes.find((q: QuizType) => (q._id === qid));    
    const [q, setQuiz] = useState<any>({
        "title": "New Quiz",
        "description" : "NEW DESCRIPTION",
        "course" : cid,
    });
    const onCreateQuizForCourse = async () => {
        if (!cid) return;
        const quiz = await client.createQuizForCourse(cid as string, q);
        dispatch(setQuizzes([...quizzes, quiz]));
    };
    const onUpdateQuizzes = async () => {
        await client.updateQuiz(cid as string, q);
        const newQuizzes = quizzes.map((a: any) => a._id === q._id ? q : a );
        dispatch(setQuizzes(newQuizzes));
    };
    useEffect(() => {
       if(qid != 'new') {
        setQuiz(firstQuiz);
       }
    }, [qid]);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});
    const fetchProfile = () => {
        if (!currentUser) return redirect("/account/signin");
        setProfile(currentUser);
        };
    useEffect(() => {
        fetchProfile();
        }, []);
        
    
    return (
        <div id="wd-quizzes-editor">
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
                        <Col><FormControl id="wd-points" defaultValue={q?.points} type="number"
                        onChange={(e) => setQuiz({ ...q, points: e.target.value })}/></Col>
                    </Row> <br />
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-quiz-group">Quiz Group</FormLabel></Col>
                        <Col><FormSelect id="wd-quiz-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </FormSelect> </Col>
                    </Row> <br />
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel></Col>
                        <Col><FormSelect id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="FRACTION">Fraction</option>
                        </FormSelect></Col>
                    </Row><br />
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel></Col>
                        <Col className="border p-1 rounded">
                            <FormSelect id="wd-submission-type">
                                <option value="ONLINE">ONLINE</option>
                                <option value="OFFLINE">OFFLINE</option>
                            </FormSelect> <br />
                            <FormCheck id="wd-chkbox-text-entry" label="Text Entry" name="online-entry-options"/> <br />
                            <FormCheck id="wd-chkbox-website-url" label="Website URL" name="online-entry-options"/> <br />
                            <FormCheck id="wd-chkbox-media-recordings" label="Media Recordings" name="online-entry-options"/> <br />
                            <FormCheck id="wd-chkbox-student-annotations" label="Student Annotations" name="online-entry-options"/> <br />
                            <FormCheck id="wd-chkbox-file-uploads" label="File Uploads" name="online-entry-options"/> <br />
                        </Col>
                    </Row><br />
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-submission-type">Assign</FormLabel></Col>
                        <Col className="border p-1 rounded">
                            <Form.Group>
                                <FormLabel><b>Assign to</b></FormLabel>
                                <FormControl id="wd-assign" value="Everyone"/>
                            </Form.Group> <br />
                            <Form.Group>
                                <FormLabel><b>Due</b></FormLabel>
                                <FormControl type="datetime-local" value={q?.due}
                                onChange={(e) => setQuiz({ ...q, due: e.currentTarget.value })}/>
                            </Form.Group> <br />
                            <div className="d-flex flex-row">
                                <Form.Group>
                                    <FormLabel><b>Available from</b></FormLabel>
                                    <FormControl type="datetime-local" value={q?.from}
                                    onChange={(e) => setQuiz({ ...q, from: e.target.value })}/>
                                </Form.Group> <br />
                                <Form.Group>
                                    <FormLabel><b>Until</b></FormLabel>
                                    <FormControl type="datetime-local" value={q?.until}
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
                    onClick={onCreateQuizForCourse}> Save </Button>)}
                    {(qid !== "new") && ((profile.role === "FACULTY" || profile.role === "ADMIN") && <Button variant="danger" size="lg" className="me-1 float-end"
                    onClick={onUpdateQuizzes}> Save </Button>)}
                </Link>
            </div> 
        </div>
    );
}