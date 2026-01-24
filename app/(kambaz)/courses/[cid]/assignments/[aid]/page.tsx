export default function AssignmentEditor() {
    return(
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online 
                Submit a link to the landing page of your Web application running on Netlify.
                The landing page should include the following: Your full name and section Links to each of the lab assignments
                Links to each of the lab assignments
                Links to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" defaultValue={100}/>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="FRACTION">Fraction</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">ONLINE</option>
                            <option value="OFFLINE">OFFLINE</option>
                        </select> <br /> <br />
                        Online Entry Options <br />
                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-text-entry"/>
                        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-website-url"/>
                        <label htmlFor="wd-chkbox-website-url">Website URL</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-media-recordings"/>
                        <label htmlFor="wd-chkbox-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-student-annotations"/>
                        <label htmlFor="wd-chkbox-student-annotations">Student Annotations</label><br />
                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-file-uploads"/>
                        <label htmlFor="wd-chkbox-file-uploads">File Uploads</label><br />
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign">Assign to</label><br />
                        <input id="wd-assign" defaultValue={"Everyone"}/> <br/> <br />
                        <label htmlFor="wd-due">Due</label><br />
                        <input id="wd-due" defaultValue={"2024-05-13"}/> <br /> <br />
                        <table>
                            <thead>
                                <tr>
                                    <th><label htmlFor="wd-available-from">Available from</label></th>
                                    <th><label htmlFor="wd-until">Until</label></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input id="wd-available-from" type="date" defaultValue={"2024-05-06"}/></td>
                                    <td><input id="wd-until" type="date" defaultValue={"2024-05-20"}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
            <hr/>
            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div> 
        </div>
    );
}