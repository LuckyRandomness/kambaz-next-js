import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { BsPlus } from "react-icons/bs";

export default function AssignmentsControls() {
    return(
        <div id="wd-assignments-control" className="text-nowrap">
            <InputGroup className="float-start w-50">
                <InputGroupText><CiSearch /></InputGroupText>
                <FormControl placeholder="Search..."/>
            </InputGroup>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-assignment-btn">
                <BsPlus className="fs-3" /> Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-group-btn">
                <BsPlus className="fs-3" /> Group
            </Button>
        </div>
    );}