import BookmarkBtn from '../components/bookmark/Bookmark';
import styles from './courses.module.css'
import SearchFilters from "@/app/components/searchbox/SearchFilters";
import { Course } from "@/app/interfaces/coursesTypes";

interface CourseItemProps {
    item:Course
}

export default function Courses({item}:CourseItemProps) {
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
                {/* <link className="course-items">
                    <div className="bestseller">{item.isBestseller}</div>
                        <BookmarkBtn itemId={item.id} />
                        <img src={item.imageUri} alt={item.title} />
                        <div className="courses">
                            <h5 className="title">{item.title}</h5>
                            <p className="author">{item.authors}</p>
                            <div className="pricing">
                                <div className="discount">{item.prices.discount}</div>
                                <div className="price">{item.prices.price}</div>
                            </div>
                            <hr />
                            <div className="ratings">
                                <p><i className="fa-regular fa-clock"></i>{item.hours} hours</p>
                                <p><i className="fa-regular fa-thumbs-up"></i>{item.likesInProcent} ({item.likesInNumbers})</p>
                            </div>
                        </div>
                    </link> */}
            </div>
        </section>
    );
  }