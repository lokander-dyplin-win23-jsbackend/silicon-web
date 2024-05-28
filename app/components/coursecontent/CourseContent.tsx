import Courses from "@/app/courses/page";
import { Course } from "@/app/interfaces/coursesTypes";

export default async function CourseContent() {
    const res = await fetch ('http://localhost:7260/api/graphql')
    const courses:Course[] = await res.json()


    return (
        <div className="content">
            {
                courses.map(course => <Courses key={course.id} item={course} />)
            }
        </div>
    );
  }