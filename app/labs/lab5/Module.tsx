const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function Module() {
    return (
    <div id="wd-working-with-objects">
      <h4>Module Object</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get module
      </a><hr/>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get module name
      </a><hr />
    </div>
);}
