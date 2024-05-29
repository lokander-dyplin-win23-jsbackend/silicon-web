import React, { useEffect, useState } from 'react';
import { Course } from '@/app/interfaces/coursesTypes';
import Courses from '@/app/courses/page';

const CourseContent: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('https://cosmos-silicon-lokdyp.documents.azure.com:443/;AccountKey=00ZaoSvYO9YG85FILx25TMsfEY7NGrrApfRYelt5pIhLnfoboShHsO0JlK9bkolEYkqMJ5a7J9ITACDb0RsIhg==;', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `
              {
                getAllCourses {
                  Id
                  IsBestseller
                  Title
                  ImageUri
                  Authors {
                    Name
                  }
                  Prices {
                    Price
                    Discount
                  }
                  Hours
                  LikesInProcent
                  Likes
                }
              }
            `
          })
        });
        console.log('Raw response:', res);

        const result = await res.json();
        console.log('Parsed result:', result);
        const data = result.data.getAllCourses;
        console.log('Data before setting state:', data);
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="content">
      {courses.length > 0 ? (
        courses.map(course => (
          <Courses key={course.Id} item={course} />
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default CourseContent;
