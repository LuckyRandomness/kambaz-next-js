"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../courses/reducer";
import { setEnrollments } from "./reducer";
import { RootState } from "@/app/(kambaz)/store";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { redirect } from "next/navigation";
import Link from "next/link";
import * as client from "../courses/client";


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
    const fetchCourses = async () => {
        try {
            if (allCourses) {
                const courses = await client.fetchAllCourses();
                dispatch(setCourses(courses));
            } else {
                const courses = await client.findMyCourses();
                dispatch(setCourses(courses));
            }
        } catch (error) {
            console.error(error);
        }
    };
    const fetchEnrollments = async () => {
        try {
            const enrollments = await client.findMyEnrollments();
            dispatch(setEnrollments(enrollments));
        }
        catch (error) {
            console.error(error);
        }
    };
    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([ ...courses, newCourse ]));
        fetchEnrollments();
    };
    const onDeleteCourse = async (courseId: string) => {
        const status = await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    };
    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
    })));};
    const onEnrollment = async (courseId: string) => {
        const newEnrollment = await client.enrollInCourse(courseId);
        fetchEnrollments();
    };
    const onUnenrollment = async (courseId: string) => {
        const status = await client.unenrollInCourse(courseId);
        dispatch(setEnrollments(enrollments.filter((enrollment) => 
            (enrollment.course !== courseId) || (enrollment.user !== profile._id))));
    };
    const [allCourses, setAllCourses] = useState(false);

    useEffect(() => {
        fetchCourses();
        fetchProfile();
        fetchEnrollments();
      }, [currentUser, allCourses]);

    const [course, setCourse] = useState<any> ({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });

    return(
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between">
                <h1 id="wd-dashboard-title">Dashboard</h1> 
                <Button onClick={() => setAllCourses(!allCourses)}>
                Enrollments</Button></div> <hr />
            <div className="wd-dashboard-courses">
                {(profile.role === "FACULTY" || profile.role === "ADMIN") && <div><h5>New Course
                    <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={onAddNewCourse} > Add </button>
                    <button className="btn btn-warning float-end me-2"
                            onClick={onUpdateCourse} id="wd-update-course-click">
                     Update </button>
                </h5><br />
                <FormControl value={course.name} className="mb-2" 
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
                <FormControl value={course.description} as="textarea" rows={3} 
                    onChange={(e) => setCourse( {...course, description: e.target.value })}/>
                <hr /> </div>}
                <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <div className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <CardImg src={course.image} variant="top" width="100%" height={160}/>
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
                                            enrollment.user === profile._id && enrollment.course == course._id) ? 
                                        <Button className="btn btn-danger m-2 float-end"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                onUnenrollment(course._id)}}>
                                        Unenroll</Button> : 
                                        <Button className="btn btn-success m-2 float-end"
                                            onClick={() => onEnrollment(course._id)}>Enroll</Button>}
                                        {(profile.role === "FACULTY" || profile.role === "ADMIN") && <div className="d-flex justify-content-between">
                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            onDeleteCourse(course._id);}}
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