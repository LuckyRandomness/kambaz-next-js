"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";

export default function CoursesLayout(
  { children }: { children: ReactNode }) {
 const [visible, setVisible] = useState(true);
 const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);
 return (
   <div id="wd-courses">
    <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" 
        onClick={() => setVisible(!visible)}/>
      {course?.name}
    </h2> 
    <hr />
    <div className="d-flex">
      <div className="d-none d-md-block">
        {visible && <CourseNavigation id={cid}/>}
      </div>
      <div className="flex-fill">
        {children}
      </div></div>
   </div>
);}
