import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard(){
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div className="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/Programming" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/programmingicon.png" width="100%" height={160} alt="programming" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 Programming</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            Full Stack Software Development</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/Physics" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/physicsicon.png" width="100%" height={160} alt="phsyics" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Physics</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            AP Physics Mechanics</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/Calculus" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/calculusicon.png" width="100%" height={160} alt="calculus" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS9012 Calculus</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            AP Calc BC</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/Social Studies" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/socialstudiesicon.png" width="100%" height={160} alt="social studies" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 Social Studies</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            Anthropology</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/History" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/historyicon.png" width="100%" height={160} alt="history" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 History</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            AP US History</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/Art" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/articon.jpg" width="100%" height={160} alt="art" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1245 Art</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            AP Fine Art</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/courses/Music" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/musicicon.jpeg" width="100%" height={160} alt="music" />
                                    <CardBody>
                                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 Music</CardTitle>
                                        <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            AP Music</CardText>
                                        <Button variant="primary">Go</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}