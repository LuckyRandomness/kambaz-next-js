'use client'
import { Button, Col, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function AssignmentEditor() {
    return(
        <div id="wd-assignments-editor">
            <Form>
                <Form.Group>
                    <FormLabel htmlFor="wd-name">Assignment Name</FormLabel><br />
                    <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" /><br />
                    <FormControl as="textarea" rows={5} defaultValue="The assignment is available online. 
                        Submit a link to the landing page of your Web application running on Netlify.
                        The landing page should include the following: Your full name and section Links to each of the lab assignments
                        Links to each of the lab assignments
                        Links to the Kanbas application
                        Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page."/><br /><br />
                </Form.Group>
                    <Row className="justify-content-center">
                        <Col className="text-end"><FormLabel htmlFor="wd-points">Points</FormLabel></Col>
                        <Col><FormControl id="wd-points" defaultValue="100"/></Col>
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
                                <FormControl type="datetime-local" value="2024-05-13T23:59"/>
                            </Form.Group> <br />
                            <div className="d-flex flex-row">
                                <Form.Group>
                                    <FormLabel><b>Available from</b></FormLabel>
                                    <FormControl type="datetime-local" value="2024-05-06T00:00"/>
                                </Form.Group> <br />
                                <Form.Group>
                                    <FormLabel><b>Until</b></FormLabel>
                                    <FormControl type="datetime-local" />
                                </Form.Group> <br />
                            </div>
                        </Col>
                    </Row><br />
            </Form>
            <hr/>
            <div className="d-flex flex-row justify-content-end">
                <Button variant="secondary" size="lg" className="me-1 float-end"> Cancel </Button>
                <Button variant="danger" size="lg" className="me-1 float-end"> Save </Button>
            </div> 
        </div>
    );
}