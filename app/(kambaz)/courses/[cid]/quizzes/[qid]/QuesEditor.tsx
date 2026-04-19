import { Dispatch, useState } from "react";
import { Button, Form, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaArrowRight, FaPencil, FaTrash } from "react-icons/fa6";
import ChoiceEditor from "./ChoiceEditor";

type QuizType = {
    _id: string,
    title: string,
    questionNum: number,
    questions: [{
        _id: string,
        title: string,
        question: string,
        type: string,
        points: any,
        choices: [{_id: string, text: string, correct: boolean}]
}]
}

type QuestionType = {
    _id: string,
    title: string,
    question: string,
    type: string,
    points: any,
    choices: [{_id: string, text: string, correct: boolean}]
}

export default function QuesEditor({q, ques, setQuiz}: 
    {q: QuizType; ques: QuestionType; setQuiz: Dispatch<any>;}) {
    const [editing, setEditing] = useState(true);
    const [question, setQuestion] = useState<QuestionType>({
        ...ques
    });
    return(
        <div className="d-flex">
            {(editing) ? 
                <div className="border p-3 m-2">
                    <Form>
                        <div className="d-flex justify-content-between">
                            <FormControl className="m-1" id="wd-question-title" defaultValue={question.title} 
                            onChange={(e) => setQuestion({...question, title: e.target.value })}/><br />
                            <FormSelect className="m-1" id="wd-question-type" onChange={(e) => setQuestion({...question, type: e.target.value})}>
                                {(ques.type == "Multiple Choice") ? 
                                    <option selected value="Multiple Choice">Multiple Choice</option> : 
                                    <option value="Multiple Choice">Multiple Choice</option>}
                                {(ques.type == "True/False") ? 
                                    <option selected value="True/False">True/False</option> : 
                                    <option value="True/False">True/False</option>}
                                {(ques.type == "Fill In The Blank") ? 
                                    <option selected value="Fill In The Blank">Fill In The Blank</option> : 
                                    <option value="Fill In The Blank">Fill In The Blank</option>}
                            </FormSelect>
                            <FormLabel className="m-1" ><b>pts:</b></FormLabel>
                            <FormControl className="m-1" type="number" id="wd-question-points" defaultValue={question.points}
                            onChange={(e) => setQuestion({...question, points: e.target.value })} />
                        </div>
                        <hr/>
                        {(ques.type == "Multiple Choice") ? 
                            <p>Enter your question and multiple answers, then select the one correct answer.</p> :
                            (ques.type == "True/False") ? <p>Enter your question text, then select if True or False is the correct answer.</p> :
                            <p>Enter your question text, then define all possible correct answers for the blank. Students will see the question followed by a small text box to type their answer.</p>}
                        <div>
                            <b>Question:</b>
                            <FormControl as="textarea" rows={5} id="wd-question-question" defaultValue= {question.question}
                            onChange={(e) => setQuestion({ ...question, question: e.target.value})}/><br /><br />
                            
                        </div>
                        <div>
                            <b>Answers:</b>
                            <ChoiceEditor ques={ques} question={question} setQuestion={setQuestion}/>
                        </div>
                    </Form>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button className="m-1 btn-danger" onClick={() => {
                            setEditing(false);
                            let updatedQuestions = [...q.questions]
                            updatedQuestions.forEach((qs) => {
                                if(qs._id == question._id) {
                                    qs.title = question.title;
                                    qs.question = question.question;
                                    qs.points = question.points;
                                    qs.type = question.type;
                                    qs.choices = question.choices;
                                }
                            })
                            setQuiz({
                                ...q,
                                questions: updatedQuestions
                            });
                        }}>Update Question</Button>
                        <Button className="m-1 btn-secondary" onClick={() => {
                            setEditing(false);
                            setQuestion(ques); //THIS IS RESETTING TO ORIGINAL... NOT TO PREVIOUS UPDATE
                        }}>Cancel</Button>
                    </div>
                </div> :
                <div className="border p-3 m-2">{question.title} ({question.type}) : {question.points} pts</div>}
            <FaPencil className="m-2" onClick={() => setEditing(!(editing))}/>
            <IconContext.Provider value={{ color: "red" }}><FaTrash className="m-2" onClick={() => setQuiz({
                ...q,
                questions: q.questions.filter((qs) => qs._id != ques._id)
            })}/></IconContext.Provider>
        </div>
    ); 
}