import { Dispatch, useState } from "react"
import { Button, Form, FormControl, FormLabel } from "react-bootstrap"
import { IconContext } from "react-icons"
import { PiArrowFatRight } from "react-icons/pi";

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

export default function QuestionDisplayer({q}: 
    {q: QuestionType;}) {
    return(
        <div className="d-flex w-100 justify-content-center">
            <IconContext.Provider value={{size: "30", color: "gray"}}>
                <PiArrowFatRight className="m-3"/></IconContext.Provider>
            <div className="d-flex flex-column align-items-center border w-50 h-100">
                <div className="d-flex justify-content-between w-100 p-2 border" style={{backgroundColor: "whitesmoke"}}>
                    <h2><b>{q.title}</b></h2>
                    <b>{q.points} pts</b>
                </div> <br/>
                <div className="h-50 w-75 p-2">
                    {q.question}
                </div>
                <br />
                <Form className="w-75">
                    {q.choices.map((c: ChoiceType) => (
                        <div className="w-75 p-2">
                            {(q.type == "Multiple Choice") && 
                                <div className="d-flex w-100 border-top m-1">
                                    <hr/>
                                    <Form.Check name="question-mult-choice" id={"qm-" + c._id} type="radio" className="m-1"/>
                                    <FormLabel className="m-1" htmlFor={"qm-" + c._id}>{c.text}</FormLabel>
                                </div>}
                            {(q.type == "True/False") && 
                                <div className="d-flex w-100 border-top m-1">
                                    <hr/>
                                    <Form.Check name="question-mult-choice" id={"qtf-" + c._id} type="radio" className="m-1"/>
                                    <FormLabel className="m-1" htmlFor={"qtf-" + c._id}>{c.text}</FormLabel>
                                </div>}
                        </div>
                    ))}
                    {(q.type == "Fill In The Blank") && 
                        <div className="d-flex w-100 border-top m-1">
                            <hr/>
                            <FormControl className="m-1" placeholder={"Type Answer Here"}/>
                        </div>}
                </Form>
                <br/>
            </div>
        </div>
    );
}