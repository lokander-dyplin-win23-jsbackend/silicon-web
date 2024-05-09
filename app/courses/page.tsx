import styles from './courses.module.css'
import SearchFilters from "@/app/components/searchbox/SearchFilters";
import CourseItems from "../components/coursecontent/CourseItems";



export default function Courses() {
    return (
        <section id={styles.ourCourses}>
            <div className={ `container ${styles.container}`}>
                <div className={styles.pageInfo}>
                    <p><i className="fa-regular fa-house"></i> Home <i className="fa-light fa-angles-right"></i><a href="#"> Courses </a></p>
                </div>
                <div className={styles.headline}>
                    <h1>Courses</h1>
                    <SearchFilters />
                </div>
                    {/* <CourseItems  /> */}
            </div>
        </section>
    );
  }