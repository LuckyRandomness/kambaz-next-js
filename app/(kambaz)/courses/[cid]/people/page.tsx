"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table";
import * as client from "../../client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
export default function Users() {
 const [users, setUsers] = useState<any[]>([]);
 const { cid } = useParams();
 const fetchUsers = async () => {
   const users = await client.findUsersForCourse(cid as string);
   setUsers(users);
 };
 useEffect(() => {
   fetchUsers();
 }, [cid]);
 return (
   <div>
     <h3>Users</h3>
     <PeopleTable users={users} fetchUsers={fetchUsers} />
   </div>
);}
