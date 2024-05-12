import style from "./course.module.css";

export default function Course() {
  return (
    <section className="Course">
      <div className="Header">
        <div className="Title"> </div>
        <div className="Metainfo"> </div>
        <div className="Authorinfo"> </div>
      </div>
      <div className="CourseInfo">
        <div className="CourseContent">
          <div className="Description"> </div>
          <div className="Program"> </div>
        </div>
        <div className="InfoCard">
          <h5 className="Title">This course includes</h5>
          <div className="Links">
            <ul className="LinkItems">
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </div>
          <h2 className="CoursePrice"></h2>
          <button className="btn btn-theme-s">Join Course</button>
        </div>
      </div>
    </section>
  );
}
