import { useGetBlogs } from "@/hooks/useBlogs";
import BlogCard from "./BlogCard";
import { Skeleton } from "../ui/skeleton";

interface Props {
  onSelect: (id: string) => void;
  id: string | null;
}

const BlogList = ({ onSelect, id }: Props) => {
  const { data, isLoading, isError } = useGetBlogs();

  console.log(data, isLoading, isError);

  if (isLoading) {
    return (
      <div className="w-screen p-2 md:px-4 space-y-4">
        <Skeleton className="w-32 h-6 rounded" />
        <div className="w-screen flex flex-row md:flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="w-60 md:w-full h-32 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="w-screen p-2 md:px-4 space-y-4">
      <div>
        <h1 className="font-bold text-lg md:text-xl">Popular Blogs</h1>
      </div>
      <div className="w-screen flex flex-row md:flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        {data?.map((blog) => (
          <BlogCard
            id={id}
            key={blog.id}
            blog={blog}
            onClick={() => onSelect(String(blog.id!))}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
