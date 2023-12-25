import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import useMutation from "../../hooks/useMutation";
import { courseService } from "../../services/courseService";
import { questionService } from "../../services/questionService";
import { formatCurrency, formatTimeDisplay } from "../../utils/format";
import { Roles } from "../../constant/roles";
import HeroSection from "./HeroSection";
import ContentDetailSection from "./ContentDetailSection";
import FeaturedSection from "./FeaturedSection";
import FAQSection from "./FAQSection";
import CoursesSection from "./CoursesSection";

const CourseDetail = () => {
  const { slug } = useParams();
  const {
    data: courseDetail,
    loading,
    error,
    execute,
  } = useMutation(courseService.getCourseBySlug);

  const { data: courseData, loading: courseLoading } = useQuery(() =>
    courseService.getCourse()
  );

  const courses = courseData?.courses || {};

  const { data: questionData, loading: questionLoading } = useQuery(() =>
    questionService.getQuestions()
  );
  const questions = {
    from0to5: questionData?.questions?.slice(0, 5) || {},
    from6toend: questionData?.questions?.slice(6) || {},
  };

  useEffect(() => {
    if (slug) execute(slug || "", {});
  }, [slug]);

  const { teams, price, startDate, tags } = courseDetail || {};

  // Course Ref
  const courseRef = useRef();
  const scrollToCourses = () => {
    courseRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  //  Modify Props
  const orderLink = `/orders/` + slug;

  const modifiedProps = {
    ...courseDetail,
    ...questions,
    teacherInfo: teams?.find((member) => member?.tags.includes(Roles.Teacher)),
    startDate: formatTimeDisplay(startDate || ""),
    price: formatCurrency(price || ""),
    courseRef,
    tags: tags?.join(" | "),
    scrollToCourses,
    orderLink,
  };

  return (
    <>
      <main className="mainwrapper coursedetailpage">
        <HeroSection {...modifiedProps} />
        <ContentDetailSection {...modifiedProps} />
        <FeaturedSection />
        <FAQSection {...modifiedProps} />
        <CoursesSection
          courses={courses}
          {...modifiedProps}
          loading={courseLoading}
        />
      </main>
    </>
  );
};

export default CourseDetail;
