import Link from "next/link";
import Image from "next/image";
export default function Dashboard(){
    return(
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div className="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/courses/Programming" className="wd-dashboard-course-link">
                        <Image src="/images/programmingicon.png" width={200} height={150} alt="programming" />
                        <div>
                            <h5>CS1234 Programming</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack Software Development
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                    <Link href="/courses/Physics" className="wd-dashboard-course-link">
                        <Image src="/images/physicsicon.png" width={200} height={150} alt="physics" />
                        <div>
                            <h5>CS5678 Physics</h5>
                            <p className="wd-dashboard-course-title">
                                AP Physics Mechanics
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                    <Link href="/courses/Calculus" className="wd-dashboard-course-link">
                        <Image src="/images/calculusicon.png" width={200} height={150} alt="calculus" />
                        <div>
                            <h5>CS9012 Calculus</h5>
                            <p className="wd-dashboard-course-title">
                                AP Calc BC
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                    <Link href="/courses/Social Studies" className="wd-dashboard-course-link">
                        <Image src="/images/socialstudiesicon.png" width={200} height={150} alt="social studies" />
                        <div>
                            <h5>CS3456 Social Studies</h5>
                            <p className="wd-dashboard-course-title">
                                Anthropology
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                    <Link href="/courses/History" className="wd-dashboard-course-link">
                        <Image src="/images/historyicon.png" width={200} height={150} alt="history" />
                        <div>
                            <h5>CS7890 History</h5>
                            <p className="wd-dashboard-course-title">
                                AP US History
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                    <Link href="/courses/Art" className="wd-dashboard-course-link">
                        <Image src="/images/articon.jpg" width={200} height={150} alt="art" />
                        <div>
                            <h5>CS1245 Art</h5>
                            <p className="wd-dashboard-course-title">
                                AP Fine Art
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                    <Link href="/courses/Music" className="wd-dashboard-course-link">
                        <Image src="/images/musicicon.jpeg" width={200} height={150} alt="music" />
                        <div>
                            <h5>CS6789 Music</h5>
                            <p className="wd-dashboard-course-title">
                                AP Music
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="wd-dashboard-course">...</div>
            <div className="wd-dashboard-course">...</div>
        </div>
    );
}