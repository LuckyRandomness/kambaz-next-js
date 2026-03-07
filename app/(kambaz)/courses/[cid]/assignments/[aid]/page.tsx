'use client'
import { Button, Col, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import * as db from "../../../../database";
import { useParams } from "next/navigation";
import Link from "next/link";
import { updateAssignment } from "../reducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(kambaz)/store";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentReducer)
    const dispatch = useDispatch();
    const firstAsgn = assignments.find((asg) => (asg._id === aid));
    const [asgn, setAsgn] = useState<any>({...firstAsgn});
    
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group>
                    <FormLabel htmlFor="wd-name">Assignment Name</FormLabel><br />
                    <FormControl id="wd-name" defaultValue={asgn?.title} 
                    onChange={(e) => setAsgn({ ...asgn, title: e.target.value})}/><br />
                    <FormControl as="textarea" rows={5} defaultValue= {asgn.description}
                    onChange={(e) => setAsgn({ ...asgn, description: e.target.value})}/><br /><br />
                </Form.Group>
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-points">Points</FormLabel></Col>
                        <Col><FormControl id="wd-points" defaultValue="100"
                        onChange={(e) => setAsgn({ ...asgn, points: e.target.value })}/></Col>
                    </Row> <br />
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-assignment-group">Assignment Group</FormLabel></Col>
                        <Col><FormSelect id="wd-assignment-group">
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
                                <FormControl id="wd-assign" defaultValue="Everyone"/>
                            </Form.Group> <br />
                            <Form.Group>
                                <FormLabel><b>Due</b></FormLabel>
                                <FormControl type="datetime-local" value="2024-05-13T23:59"
                                onChange={(e) => setAsgn({ ...asgn, due: e.target.value })}/>
                            </Form.Group> <br />
                            <div className="d-flex flex-row">
                                <Form.Group>
                                    <FormLabel><b>Available from</b></FormLabel>
                                    <FormControl type="datetime-local" value="2024-05-06T00:00"
                                    onChange={(e) => setAsgn({ ...asgn, from: e.target.value })}/>
                                </Form.Group> <br />
                                <Form.Group>
                                    <FormLabel><b>Until</b></FormLabel>
                                    <FormControl type="datetime-local" 
                                    onChange={(e) => setAsgn({ ...asgn, until: e.target.value })}/>
                                </Form.Group> <br />
                            </div>
                        </Col>
                    </Row><br />
            </Form>
            <hr/>
            <div className="d-flex flex-row justify-content-end">
                <Link href={`/courses/${ cid }/assignments`}>
                    <Button variant="secondary" size="lg" className="me-1 float-end"> Cancel </Button>
                    <Button variant="danger" size="lg" className="me-1 float-end"
                    onClick={() => dispatch(updateAssignment({ asgn }))}> Save </Button>
                </Link>
            </div> 
        </div>
    );
}