import styles from './courses.module.css'
import SearchFilters from "@/app/components/searchbox/SearchFilters";
import CourseItems from "../components/coursecontent/CourseItems";



export default function Courses() {
    return (
        <section id="our-courses">
            <div className="container">
                <div className="page-info">
                    <p><i className="fa-regular fa-house"></i> Home <i className="fa-light fa-angles-right"></i><a href="#"> Courses </a></p>
                </div>
                <div className="headline">
                    <h1>Courses</h1>
                    <SearchFilters />
                </div>
                    <CourseItems  />
            </div>
        </section>
    );
  }