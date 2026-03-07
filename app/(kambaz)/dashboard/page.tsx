"use client"
import { useState } from "react";
import Link from "next/link";
import * as db from "../database";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../courses/reducer";
import { RootState } from "../store";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
export default function Dashboard(){
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const dispatch = useDispatch();
    const [course, setCourse] = useState<any> ({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const { enrollments } = db;
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <div className="wd-dashboard-courses">
                <h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => dispatch(addNewCourse(course))} > Add </button>
                    <button className="btn btn-warning float-end me-2"
                            onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                     Update </button>
                </h5><br />
                <FormControl value={course.name} className="mb-2" 
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
                <FormControl value={course.description} as="textarea" rows={3} 
                    onChange={(e) => setCourse( {...course, description: e.target.value })}/>
                <hr />
                <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
                <Row xs={1} md={5} className="g-4">
                    {courses.filter((course) =>
                        enrollments.some(
                            (enrollment) =>
                            enrollment.user ===  currentUser._id &&
                            enrollment.course === course._id
                            ))
                    .map((course) => (
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
                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(deleteCourse(course._id));}}
                                            id="wd-delete-course-click"
                                            className="btn btn-danger me-2 float-end">
                                        Delete</Button>
                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn btn-warning me-2 float-end">
                                        Edit</Button>
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