import Link from "next/link"
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <FormControl placeholder="username" id="wd-username" className="mb-2"/>
      <FormControl placeholder="password" type="password" id="wd-password" className="mb-2"/>
      <Link href="profile" className="btn btn-primary w-100 mb-2">Signup</Link> <br />
      <Link href="signin" id="wd-signin-link">Signin</Link>
    </div>
  );
}