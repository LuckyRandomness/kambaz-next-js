"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { addNewEnrollment, deleteEnrollment } from "./reducer";
import { RootState } from "@/app/(kambaz)/store";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { redirect } from "next/navigation";
import Link from "next/link";
export default function Dashboard(){
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>({});
    const fetchProfile = () => {
        if (!currentUser) return redirect("/account/signin");
        setProfile(currentUser);
      };
    useEffect(() => {
        fetchProfile();
      }, []);

    const [course, setCourse] = useState<any> ({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const [allCourses, setAllCourses] = useState(false);
    const [publishedCourses, setPublishedCourses] = useState(0);

    return(
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between">
                <h1 id="wd-dashboard-title">Dashboard</h1> 
                <Button onClick={() => setAllCourses(!allCourses)}>
                Enrollments</Button></div> <hr />
            <div className="wd-dashboard-courses">
                {(profile.role === "FACULTY") && <div><h5>New Course
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
                <hr /> </div>}
                <h2 id="wd-dashboard-published">Published Courses ({publishedCourses})</h2> <hr />
                <Row xs={1} md={5} className="g-4">
                    {courses.filter((course) =>
                        enrollments.some(
                            (enrollment) =>
                            enrollment.user === profile._id &&
                            enrollment.course === course._id ||
                            allCourses
                            ))
                    .map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <div className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <CardImg onLoad={() => setPublishedCourses(
                                        courses.filter((c) =>
                                        enrollments.some(
                                            (enrollment) =>
                                            enrollment.user === profile._id &&
                                            enrollment.course === c._id ||
                                            allCourses
                                            )).length
                                    )}
                                    src={course.image} variant="top" width="100%" height={160}/>
                                    <CardBody className="card-body">
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description}</CardText>
                                        <Link href={`/courses/${course._id}/home`}>
                                            <Button className="btn btn-primary m-2">
                                            Go</Button>
                                        </Link>
                                        {enrollments.some(
                                            (enrollment) =>
                                            enrollment.user === profile._id &&
                                            enrollment.course === course._id) ? 
                                        <Button className="btn btn-danger m-2 float-end"
                                            onClick={() => dispatch(deleteEnrollment(course._id))}>
                                        Unenroll</Button> : 
                                        <Button className="btn btn-success m-2 float-end"
                                            onClick={() => dispatch(addNewEnrollment({
                                                user: profile._id,
                                                course: course._id,
                                            }))}>Enroll</Button>}
                                        {(profile.role === "FACULTY") && <div className="d-flex justify-content-between">
                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(deleteCourse(course._id));}}
                                            id="wd-delete-course-click"
                                            className="btn btn-danger m-2 float-end">
                                        Delete</Button>
                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }} className="btn btn-warning m-2 float-end">
                                        Edit</Button></div>}
                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}