import axiosInstance from "../utils/axiosInstance";

export const blogService = {
  getBlogs(query = "") {
    return axiosInstance.get(`/blogs/${query}`);
  },
  getBlogsByCategories(query = "") {
    return axiosInstance.get(`/blog-categories${query}`);
  },
};
