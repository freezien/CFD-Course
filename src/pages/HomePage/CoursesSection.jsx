import React from "react";
import CourseItem from "../../components/CourseItem/index.jsx";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant/pathname.js";

const CoursesSection = ({ courses, loading }) => {
  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="heading">
            <h2 className="heading__title title --t2">
              Tất cả <span className="color--primary">khóa học</span>
            </h2>
          </div>
          <div className="courses__list">
            {courses?.length > 0 &&
              courses.map((course, index) => (
                <CourseItem {...course} key={course.id || index} />
              ))}
          </div>
          <div className="courses__btnall">
            <Link to={PATHS.COURSES} className="course__btn btn btn--grey">
              Tất cả khoá học
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
