import { Course } from "@/app/interfaces/coursesTypes";
import BookmarkBtn from "../bookmark/Bookmark";

interface CourseItemProps {
    item:Course
}

export default function CourseItems({item}:CourseItemProps) {

    return (
        <div className="course-items" asp-action="Details" asp-controller="Courses" asp-route-id="@course.Id">
            <div className="bestseller">Best Seller</div>
            <BookmarkBtn itemId={item.id} />
            <img src={item.image} alt={item.title} />
            <div className="courses">
                <h5 className="title">{item.title}</h5>
                <p className="author">{item.author}</p>
                <div className="pricing">
                    <div className="discount">{item.discountPrice}</div>
                    <div className="price">{item.price}</div>
                </div>
                <hr />
                <div className="ratings">
                    <p><i className="fa-regular fa-clock"></i>{item.hours} hours</p>
                    <p><i className="fa-regular fa-thumbs-up"></i>{item.likesInProcent} ({item.likesInNumbers})</p>
                </div>
            </div>
        </div>
    );
  }