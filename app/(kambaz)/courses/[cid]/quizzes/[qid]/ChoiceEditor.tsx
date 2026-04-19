import { Dispatch, useState } from "react";
import { Button, FormControl, FormLabel } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaArrowRight, FaPlus, FaTrash } from "react-icons/fa6";
import {v4 as uuidv4} from "uuid";

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

export default function ChoiceEditor({question, setQuestion}: 
    {question: QuestionType; setQuestion: Dispatch<any>;}) {
    const [newChoice, setNewChoice] = useState({
        _id: uuidv4(),
        text: "New Answer",
        correct: false
    });
    return(
        <div>
            {question.type == "Multiple Choice" && 
            <div>
                {question.choices.map((choice) => (
                    <div className="d-flex">
                        {(choice.correct) ?
                            <div className="d-flex">
                                <FormLabel>Correct Answer:</FormLabel>
                                <IconContext.Provider value={{ color: "green" }}><FaArrowRight className="m-1"/></IconContext.Provider>
                            </div> :
                            <div className="d-flex" onClick={
                                    () => 
                                    {let updatedChoices = [...question.choices]
                                        updatedChoices.forEach((c) => {(c._id == choice._id) ?
                                            c.correct = true :
                                            c.correct = false})
                                        setQuestion({
                                        ...question,
                                        choices:[
                                            ...updatedChoices,
                                        ]
                                    })}
                                }>
                                <FormLabel>Possible Answer:</FormLabel>
                                <FaArrowRight/>
                            </div>}
                        <FormControl onChange={(e) => {
                            let updatedChoices = [...question.choices]
                            updatedChoices.forEach((c) => {
                                if (c._id == choice._id) {c.text = e.target.value}
                            })
                            setQuestion({
                                ...question,
                                choices:[...updatedChoices]
                            })
                            }}defaultValue={choice.text}/>
                        <IconContext.Provider value={{ color: "red" }}>
                            <FaTrash onClick={() => 
                                {setQuestion({
                                    ...question,
                                    choices:[
                                        ...question.choices.filter((c) => (c._id != choice._id)),
                                    ]
                                })}}/>
                        </IconContext.Provider>
                    </div>
                ))}
                <div className="border">
                    <div className="d-flex">
                        <FormLabel>Possible Answer:</FormLabel>
                        <FaArrowRight className="m-1"/>
                        <FormControl defaultValue={newChoice.text} onChange={(e) => setNewChoice({...newChoice, text: e.target.value})}/>
                    </div>
                    <Button className="m-2 btn-light btn-outline-danger" onClick={() => {
                        setQuestion({
                            ...question,
                            choices:[
                                ...question.choices,
                                newChoice
                            ]
                        });
                        setNewChoice({...newChoice, _id: uuidv4()})
                    }}><FaPlus/> Add New Question</Button>
                </div>
            </div>}
            
            {(question.type == "True/False") && (
                <div>
                    {question.choices.map((choice) => (
                    <div className="d-flex justify-content-between">
                        {(choice.correct) ?
                            <div className="d-flex">
                                <IconContext.Provider value={{ color: "green" }}><FaArrowRight className="m-1"/></IconContext.Provider>
                                <p>{choice.text}</p>
                            </div> :
                            <div className="d-flex" onClick={() => 
                                {let updatedChoices = [...question.choices]
                                    updatedChoices.forEach((c) => {(c._id == choice._id) ?
                                        c.correct = true :
                                        c.correct = false})
                                    setQuestion({
                                    ...question,
                                    choices:[
                                        ...updatedChoices,
                                    ]
                                })}}>
                                <FaArrowRight className="m-1"/>
                                <p>{choice.text}</p>
                            </div>}
                    </div>
                ))}
                </div>
            )}

            {question.type == "Fill In The Blank" && 
            <div>
                {question.choices.map((choice) => (
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <FormLabel>Possible Answer:</FormLabel>
                            <FormControl onChange={(e) => {
                                let updatedChoices = [...question.choices]
                                updatedChoices.forEach((c) => {
                                    if (c._id == choice._id) {c.text = e.target.value}
                                })
                                setQuestion({
                                    ...question,
                                    choices:[...updatedChoices]
                                })
                                }}defaultValue={choice.text}/>
                        </div> 
                        <IconContext.Provider value={{ color: "red" }}>
                            <FaTrash onClick={() => 
                                {setQuestion({
                                    ...question,
                                    choices:[
                                        ...question.choices.filter((c) => (c._id != choice._id)),
                                    ]
                                })}}/>
                        </IconContext.Provider>
                    </div>
                ))}
                <div className="border">
                    <div className="d-flex">
                        <FormLabel>Possible Answer:</FormLabel>
                        <FormControl defaultValue={newChoice.text} onChange={(e) => setNewChoice({...newChoice, text: e.target.value, correct: true})}/>
                    </div>
                    <Button className="m-2 btn-light btn-outline-danger" onClick={() => {
                        setQuestion({
                            ...question,
                            choices:[
                                ...question.choices,
                                newChoice
                            ]
                        });
                        setNewChoice({...newChoice, _id: uuidv4()})
                    }}><FaPlus/> Add New Question</Button>
                </div>
            </div>}
        </div>
    );
}