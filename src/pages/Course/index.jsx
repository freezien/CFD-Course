import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseItem from "../../components/CourseItem";
import { courseService } from "../../services/courseService";
import { Empty, Skeleton } from "antd";
import useQuery from "../../hooks/useQuery";
import Input from "../../components/Input";
import useDebounce from "../../hooks/useDebounce";

const Course = () => {
  const { data, loading, error, refetch } = useQuery((query) =>
    courseService.getCourse(query)
  );
  const courses = data?.courses || [];

  const [searchTerm, setSearchTerm] = useState(undefined);
  const debounceTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Refetch API
    if (typeof debounceTerm === "string") {
      refetch(debounceTerm ? `?search=${debounceTerm}` : "");
    }
  }, [debounceTerm]);

  return (
    <>
      <main className="mainwrapper courses --ptop">
        <div className="container">
          <div className="textbox">
            <div className="container">
              <h2 className="title --t2">Tất cả khoá học</h2>
              <div
                className="search"
                style={{ width: "30%", margin: "0 auto" }}
              >
                <Input
                  type="text"
                  value={searchTerm || " "}
                  placeholder="Tìm kiếm khoá học"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="courses__list">
            {/* Loading skeleton */}
            {!loading && courses?.length === 0 && (
              <Empty
                description="Không có dữ liệu về khoá học"
                style={{ margin: "0 auto" }}
              />
            )}
            {loading &&
              Array(4)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="courses__list-item"
                    style={{ height: "50vh" }}
                  >
                    <Skeleton
                      active
                      style={{ width: "512px", height: "515px" }}
                    />
                    <br />
                    <Skeleton
                      active
                      style={{ width: "512px", height: "515px" }}
                    />
                  </div>
                ))}

            {/* Render Courses */}
            {courses?.length > 0 &&
              courses.map((course, index) => {
                return <CourseItem {...course} key={course?.id || index} />;
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Course;
