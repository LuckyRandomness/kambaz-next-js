import Link from "next/link"
import { FormControl } from "react-bootstrap";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Signin</h3>
      <FormControl placeholder="username" id="wd-username" className="mb-2" />
      <FormControl placeholder="password" type="password" id="wd-password" className="mb-2" />
      <Link href="profile" className="btn btn-primary w-100 mb-2">Signin</Link>
      <Link href="signup" id="wd-signup-link">Signup</Link>
    </div>
  );
}