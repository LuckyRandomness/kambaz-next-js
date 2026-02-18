"use client";
import { usePathname } from "next/navigation";

function capitalizeFirstLetter(val : string | undefined) {
    if (val === undefined) {
        return "";
    } else {
        console.log(val.charAt(0).toUpperCase() + val.slice(1));
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
}

export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
 const pathname = usePathname();
 return (
   <span>
     {course?.name} &gt; {capitalizeFirstLetter(pathname.split("/").pop())}
   </span>
);}
