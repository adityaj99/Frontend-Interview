import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, getBlogById, createBlog } from "@/api/blogApi";

export const useGetBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

export const useGetBlog = (id: string) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });

export const useCreateBlog = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }),
  });
};
