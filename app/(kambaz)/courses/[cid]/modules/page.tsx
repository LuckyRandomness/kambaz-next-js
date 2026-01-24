export default function Modules() {
  return (
    <div>
      <div id="wd-modules-buttons">
        <button id="wd-collapse-all-btn">Collapse All</button>
        <button id="wd-view-progress-btn">View Progress</button>
        <select id="wd-publish-select">
            <option value="ALL">Publish All</option>
            <option value="ONE">Publish Only This</option>
        </select>
        <button id="wd-+-module-btn">+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>          
        </li>
        <li className="wd-module"> <div className="wd-title">Week 2</div> 
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Basics</li>
                <li className="wd-content-item">Learn tags and elements</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module"> <div className="wd-title">Week 3</div> 
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Basics</li>
                <li className="wd-content-item">Learn to style HTML with CSS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}