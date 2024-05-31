'use client'; 

import React, { useEffect, useState } from 'react';
import styles from './courses.module.css';


interface Author {
  name: string;
}


interface Course {
  id: string;
  isBestSeller: boolean;
  imageUri : string;
  title: string;
  authors: Author[];
  prices: {
    currency: string;
    price: number;
    discount: number;
};
  hours: string;
  likesInProcent: string;
  likesInNumbers: string;

  content: {
    description: string;
    includes: string[];
    programDetails: {
        id: number;
        title: string;
        description: string;
    }[];
};
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = `
          {
            getAllCourses {
              id
              imageUri
              isBestSeller
              title
              authors {
                name
              }
              prices {
                price
                currency
                discount
              }
              hours
              likesInProcent
              likes
            }
          }
        `;

        const res = await fetch('https://courseprovider-silicon-lokdyp.azurewebsites.net/api/GraphQL?code=tcyn-BEIJY9ztZdc531EadERYX7DaKSkjl47Cb3EFK3fAzFu_zq1Yw%3D%3D', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ query })
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        if (result.errors) {
          throw new Error(result.errors.map((err: any) => err.message).join(', '));
        }

        setCourses(result.data.getAllCourses);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="loading">Loading... <span className="loader"></span></div>;
  }

  if (error) {
    return <div className="courseError">Error: {error}</div>;
  }

  return (
    <section id={styles.ourCourses}>
      <div className={ `container ${styles.container}`}>
                <div className={styles.pageInfo}>
                    <p><i className="fa-regular fa-house"></i> Home <i className="fa-light fa-angles-right"></i><a href="#"> Courses </a></p>
                </div>
                <div className={styles.headline}>
                    <h1>Courses</h1>
                    <div className={styles.forms}>
        <select id={styles.choose}>
            <option>All Categories</option>
            <option>Fullstack</option>
            <option>Web developer</option>
        </select>
        <form>
            <input className="form-control" type="text" placeholder="Search courses" />
                <i className="fa-regular fa-magnifying-glass"></i>
        </form>
    </div>
                </div>


          <div className={styles.content}>
            {courses.map((item) => (
            <div key={item.id} className={styles.courseItems}>
                <div className={styles.bestseller}>{item.isBestSeller}Bestseller</div>
                    {/* <BookmarkBtn course={item} /> */}
                    <img src={item.imageUri} alt={item.title} />
                    <div className={styles.courses}>
                        <h5 className={styles.title}>{item.title}</h5>
                        <p className={styles.author}>By {item.authors.map(author => author.name).join(', ')}</p>
                        <div className={styles.pricing}>
                        {item.prices.discount > 0 ? (
                      <>
                        <p className={styles.discount}>${(item.prices.price - item.prices.discount).toFixed(2)}</p>
                        <p className={styles.price}>${item.prices.price.toFixed(2)}</p>
                      </>
                    )
                    :
                    (
                        <p className={styles.price}>${item.prices.price.toFixed(2)}</p>   
                    )
                    }
                        </div>
                        <hr />
                        <div className={styles.ratings}>
                            <p><i className="fa-regular fa-clock"></i>{item.hours} hours</p>
                            <p><i className="fa-regular fa-thumbs-up"></i>{item.likesInProcent} ({item.likesInNumbers})</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default Courses;

