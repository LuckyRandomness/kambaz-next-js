"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({id} : {id:string}) {
    const pathname = usePathname();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-6 rounded-0">
            {links.map((link) => (
                <Link href={`/courses/${id}/${link.toLowerCase()}`} 
                className={`list-group-item border-0 ${pathname.includes(link.toLowerCase()) ? "active" : "text-danger"}`}>
                {link}</Link>
            ))}
        </div>
    );
}