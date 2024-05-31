// import React, { useEffect, useState } from 'react';
// import { Course } from '@/app/interfaces/coursesTypes';
// import Courses from '@/app/courses/page';

// const CourseContent: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch('https://courseprovider-silicon-lokdyp.azurewebsites.net/api/GraphQL?code=tcyn-BEIJY9ztZdc531EadERYX7DaKSkjl47Cb3EFK3fAzFu_zq1Yw%3D%3D', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             query: `
//               {
//                 getAllCourses {
//                   Id
//                   IsBestseller
//                   ImageUri
//                   Title
//                   Authors {
//                     Name
//                   }
//                   Prices {
//                     Price
//                     Discount
//                   }
//                   Hours
//                   LikesInProcent
//                   Likes
//                 }
//               }
//             `
//           })
//         });
//         console.log('Raw response:', res);

//         const result = await res.json();
//         console.log('Parsed result:', result);
//         const data = result.data.getAllCourses;
//         console.log('Data before setting state:', data);
//         setCourses(data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="content">
//       {courses.length > 0 ? (
//         courses.map(course => (
//           <Courses key={course.Id} item={course} />
//         ))
//       ) : (
//         <p>No courses available</p>
//       )}
//     </div>
//   );
// };

// export default CourseContent;
