"use client"
import { useState } from "react";
import Link from "next/link";
import * as db from "../database";
import { v4 as uuidv4 } from "uuid";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard(){
    const [courses, setCourses] = useState<any[]>(db.courses);
    const course: any = {
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    };
    const addNewCourse = () => {
        const newCourse = { ...course, _id: uuidv4() };
        setCourses([ ...courses, newCourse ]);
    };
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div className="wd-dashboard-courses">
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add </button>
                </h5><hr />
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link href={`/courses/${course._id}/home`} 
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <CardImg src={`/images/${course.name}.jpg`} variant="top" width="100%" height={160}/>
                                    <CardBody className="card-body">
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description}</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}