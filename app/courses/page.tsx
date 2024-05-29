import BookmarkBtn from '../components/bookmark/Bookmark';
import styles from './courses.module.css'
import SearchFilters from "@/app/components/searchbox/SearchFilters";
import { Course } from "@/app/interfaces/coursesTypes";

interface CourseItemProps {
    item:Course
}

export default function Courses({item}:CourseItemProps) {
    
    console.log(item)
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
                <div key={item.Id} className="course-item">
                    <div className="bestseller">{item.IsBestseller}</div>
                        {/* <BookmarkBtn itemId={item} /> */}
                        <img src={item.ImageUri} alt={item.Title} />
                        <div className="courses">
                            <h5 className="title">{item.Title}</h5>
                            <p className="author">{item.Authors}</p>
                            <div className="pricing">
                                <div className="discount">{item.Prices.Discount}</div>
                                <div className="price">{item.Prices.Price}</div>
                            </div>
                            <hr />
                            <div className="ratings">
                                <p><i className="fa-regular fa-clock"></i>{item.Hours} hours</p>
                                <p><i className="fa-regular fa-thumbs-up"></i>{item.LikesInProcent} ({item.LikesInNumbers})</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}