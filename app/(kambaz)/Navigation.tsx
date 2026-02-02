'use client'
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { IconContext } from "react-icons";
import Link from "next/link";
export default function KambazNavigation() {
    return (
        <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 110 }}
        id="wd-kambaz-navigation">
            <ListGroupItem action active className="bg-black border-0 text-center" as="a" href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
                <img src="/images/NEU.png" width="50px" alt="Northeastern University"/>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center text-break">
                <Link href="/account" id="wd-account-link" className="text-white text-decoration-none text-start" >
                <FaRegCircleUser className="fs-1 text-white" />
                <br />
                Account
                </Link>
            </ListGroupItem>
            <IconContext.Provider value={{ color:"rgb(181, 40, 40)" }}>
                <ListGroupItem className="border-0 bg-black text-center text-break">
                    <Link href="/dashboard" id="wd-dashboard-link" className="text-white text-decoration-none text-sta">
                            <AiOutlineDashboard className="fs-1" />                    
                        <br />
                        Dashboard
                    </Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 bg-black text-center text-break">
                    <Link href="/dashboard" id="wd-course-link" className="text-white text-decoration-none">
                        <LiaBookSolid className="fs-1" />
                        <br />
                        Courses
                    </Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 bg-black text-center text-break">
                    <Link href="/calendar" id="wd-calendar-link" className="text-white text-decoration-none text-red">
                        <IoCalendarOutline className="fs-1" />
                        <br />
                        Calendar
                    </Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 bg-black text-center text-break">
                    <Link href="/inbox" id="wd-inbox-link" className="text-white text-decoration-none">
                        <FaInbox className="fs-1" />
                        <br />
                        Inbox
                    </Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 bg-black text-center text-break">
                    <Link href="/labs" id="wd-labs-link" className="text-white text-decoration-none">
                        <LiaCogSolid className="fs-1" />
                        <br />
                        Labs
                    </Link>
                </ListGroupItem>
            </IconContext.Provider>
        </ListGroup>
    );
}