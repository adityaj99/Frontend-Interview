import axios from "axios";
import type { Blog } from "@/types/blog";

const BASE_URL = "http://localhost:3001/blogs";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createBlog = async (blog: Blog) => {
  const res = await axios.post(BASE_URL, blog);
  return res.data;
};
