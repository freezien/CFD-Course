import React, { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { PATHS } from "../../constant/pathname";
import useMutation from "../../hooks/useMutation";
import useQuery from "../../hooks/useQuery";
import { blogService } from "../../services/blogService";
import { courseService } from "../../services/courseService";
import Title from "./Title";
import Content from "./Content";
import { formatTimeDisplay } from "../../utils/format";
import CourseItem from "../../components/CourseItem";

const BlogDetail = () => {
  const { slug } = useParams();
  const {
    data: blogsData,
    loading,
    execute,
  } = useMutation(blogService.getBlogs);

  useEffect(() => {
    if (slug) execute(slug, {});
  }, [slug]);

  const { createdAt } = blogsData || {};

  const modifiedProps = {
    ...blogsData,
    createdAt: formatTimeDisplay(createdAt),
  };

  const { data: blogData, loading: blogLoading } = useQuery(
    blogService.getBlogs
  );
  const blogs = blogData?.blogs || {};

  return (
    <>
      <main className="mainwrapper blogdetail --ptop">
        <div className="container">
          <div className="wrapper">
            <Title {...modifiedProps} />
            <Content {...modifiedProps} />
          </div>
          <div className="blogdetail__related">
            <h2 className="blogdetail__related-title title --t2">
              Bài viết liên quan
            </h2>
            <div className="blog__list">
              {!!blogs?.length > 0 &&
                blogs.map((item, index) => {
                  const { author, image, category, name, slug, createdAt, id } =
                    item || {};
                  return (
                    <div className="blog__list-item" key={id || index}>
                      <div className="img">
                        <Link to={PATHS.BLOG + `/${slug}`}>
                          <img
                            src={image || ""}
                            alt="Khóa học CFD"
                            className="course__thumbnail"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <p className="label">{category?.name || ""}</p>
                        <h2 className="title --t3">
                          <Link to={PATHS.BLOG + `/${slug}`}>{name || ""}</Link>
                        </h2>
                        <div className="content__info">
                          <div className="user">
                            <div className="user__img">
                              <img
                                src="/img/avatar_nghia.jpg"
                                alt="Avatar teacher"
                              />
                            </div>
                            <p className="user__name">{author || ""}</p>
                          </div>
                          <div className="date">
                            {formatTimeDisplay(createdAt) || ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
