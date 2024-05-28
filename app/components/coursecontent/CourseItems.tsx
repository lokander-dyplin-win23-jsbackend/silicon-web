// import { Course } from "@/app/interfaces/coursesTypes";
// import BookmarkBtn from "../bookmark/Bookmark";

// interface CourseItemProps {
//     item:Course
// }

// export default function CourseItems({item}:CourseItemProps) {

//     return (
//         <link href={`/courses/${item.id}`} className="course-items">
//             <div className="bestseller">{item.isBestseller}</div>
//             <BookmarkBtn itemId={item.id} />
//             <img src={item.imageUri} alt={item.title} />
//             <div className="courses">
//                 <h5 className="title">{item.title}</h5>
//                 <p className="author">{item.authors}</p>
//                 <div className="pricing">
//                     <div className="discount">{item.prices.discount}</div>
//                     <div className="price">{item.prices.price}</div>
//                 </div>
//                 <hr />
//                 <div className="ratings">
//                     <p><i className="fa-regular fa-clock"></i>{item.hours} hours</p>
//                     <p><i className="fa-regular fa-thumbs-up"></i>{item.likesInProcent} ({item.likesInNumbers})</p>
//                 </div>
//             </div>
//         </link>
//     );
//   }