import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl defaultValue="LuckyRandomness" id="wd-username" />
      <FormControl defaultValue="password123" type="password" id="wd-password" />
      <FormControl defaultValue="Kelsey" id="wd-firstname"/>
      <FormControl defaultValue="Hammel" id="wd-lastname"/>
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob"/>
      <FormControl defaultValue="hammel.k@northeastern.edu" type="email" id="wd-email"/>
      <FormSelect defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <Link href="signin" className="btn btn-danger w-100 mb-2">Signout</Link>
    </div>
  );
}