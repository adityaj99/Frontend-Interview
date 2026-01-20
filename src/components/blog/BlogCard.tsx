import type { Blog } from "@/types/blog";
import { Card, CardContent } from "../ui/card";
import { timeAgo } from "@/lib/timeAgo";

interface Props {
  blog: Blog;
  onClick: () => void;
  id: string | null;
}

const BlogCard = ({ blog, onClick, id }: Props) => {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer hover:shadow-lg transition bg-white ${id === String(blog.id) ? "border-l-3 border-blue-500" : ""}`}
    >
      <CardContent className="w-60 md:w-84 xl:w-125 space-y-2">
        <div className="flex justify-between">
          <p
            className={`text-xs lg:text-sm ${id === String(blog.id) ? "text-blue-500" : ""}`}
          >
            {blog.category[0]}
          </p>
          <div>
            <p className="text-xs text-gray-500">{timeAgo(blog.date)}</p>
          </div>
        </div>
        <h2 className="font-bold text-sm lg:text-lg line-clamp-1">
          {blog.title}
        </h2>

        <p className="text-xs text-gray-500 line-clamp-2">{blog.description}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
