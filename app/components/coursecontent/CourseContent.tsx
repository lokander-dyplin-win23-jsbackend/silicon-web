import CourseItems from "./CourseItems";
import { Course } from "@/app/interfaces/coursesTypes";

export default async function CourseContent() {
    const res = await fetch ('https://localhost:7253/api/Course')
    const courses:Course[] = await res.json()

    // const courses:Course[] = []

    return (
        <div className="content">
            {
                courses.map(course => <CourseItems key={course.id} item={course} />)
            }
        </div>
    );
  }