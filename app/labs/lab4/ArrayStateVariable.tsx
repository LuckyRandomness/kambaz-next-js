"use client";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "./store";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    const { todos } = useSelector((state: RootState) => state.todosReducer);
    return (
        <div>
            <ListGroup id="wd-array-state-variables">
                <ListGroupItem><h2>Array State Variable</h2>
                <Button variant="success" onClick={addElement}>
                Add Element</Button></ListGroupItem>
                    {array.map((item, index) => (
                        <ListGroupItem key={index} className="d-flex justify-content-between"> 
                            {item}
                            <Button variant="danger"
                                onClick={() => deleteElement(index)}>
                            Delete</Button>
                        </ListGroupItem>
                    ))}
</ListGroup><hr/></div>);}