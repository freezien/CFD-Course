import { Empty } from "antd";
import React from "react";
import CourseItem from "../../components/CourseItem";

const CoursesSection = ({
  courses,
  loading,
  teacherInfo,
  price,
  slug,
  tags,
}) => {
  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="heading --center --noline">
            <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
          </div>
          <div className="courses__list">
            {!loading && courses?.length === 0 && (
              <Empty
                description="Không tìm thấy dữ liệu nào"
                style={{ margin: "0 auto" }}
              />
            )}
            {courses?.length > 0 &&
              courses.map((item, index) => {
                return <CourseItem {...item} key={courses.id || index} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
