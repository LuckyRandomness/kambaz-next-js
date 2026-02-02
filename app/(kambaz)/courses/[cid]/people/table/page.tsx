import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
    <tr><td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Kate</span>{" "}
        <span className="wd-last-name">Bishop</span></td>
      <td className="wd-login-id">002394521F</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-02</td>
      <td className="wd-total-activity">00:56:12</td></tr>
    <tr><td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Peter</span>{" "}
        <span className="wd-last-name">Parker</span></td>
      <td className="wd-login-id">001234521R</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2021-01-03</td>
      <td className="wd-total-activity">16:34:54</td></tr>
    <tr><td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">Thanos</span>{" "}
        <span className="wd-last-name">InfinityStones</span></td>
      <td className="wd-login-id">001235987P</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">TEACHER</td>
      <td className="wd-last-activity">2019-8-28</td>
      <td className="wd-total-activity">19:54:14</td></tr>
    </tbody>
   </Table>
  </div> );}