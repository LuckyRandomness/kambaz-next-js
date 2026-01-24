import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="LuckyRandomness" placeholder="username" className="wd-username" /> <br />
      <input defaultValue="password123" placeholder="password" type="password" className="wd-password" /> <br />
      <input defaultValue="Kelsey" placeholder="First Name" className="wd-firstname"/> <br />
      <input defaultValue="Hammel" placeholder="Last Name" className="wd-lastname"/> <br />
      <input defaultValue="2000-01-01" type="date" id="wd-dob"/> <br />
      <input defaultValue="hammel.k@northeastern.edu" type="email" id="wd-email"/> <br />
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select> <br />
      <Link href="signin">Sign out</Link>
    </div>
  );
}