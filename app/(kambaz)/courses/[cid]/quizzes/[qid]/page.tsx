'use client'
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "next/navigation";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";

export default function QuizEditor() {
    const { cid, qid } = useParams();        
    return (
        <div id="wd-quizzes-editor">
            <Tabs defaultActiveKey="details">
                <Tab eventKey="details" title="Details">
                    <br/>
                    <DetailsEditor cid={cid as string} qid={qid as string}/>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <br/>
                    <QuestionsEditor cid={cid as string} qid={qid as string}/>
                </Tab>
            </Tabs>
        </div>
    );
}