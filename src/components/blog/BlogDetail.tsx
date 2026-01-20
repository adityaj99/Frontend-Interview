import { useGetBlog } from "@/hooks/useBlogs";
import { timeAgo } from "@/lib/timeAgo";
import { Skeleton } from "../ui/skeleton";

const BlogDetail = ({ id }: { id: string | null }) => {
  const { data, isLoading, isError } = useGetBlog(id ?? "");

  if (!id) {
    return (
      <div className="w-full flex items-center justify-center h-full text-gray-400">
        Select a blog to view details
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-full bg-white p-2 md:p-6 space-y-4">
        <Skeleton className="w-full h-60 md:h-80 lg:h-130 rounded-lg" />
        <div className="flex gap-2 items-center">
          <Skeleton className="w-20 h-4 rounded" />
          <Skeleton className="w-4 h-4 rounded-full" />
          <Skeleton className="w-20 h-4 rounded" />
        </div>
        <Skeleton className="w-3/4 h-8 rounded" />
        <Skeleton className="w-full h-48 rounded" />
      </div>
    );
  }
  if (isError || !data) {
    return <div>Error loading blog details</div>;
  }

  return (
    <div className="w-full h-full bg-white p-2 md:p-6 space-y-4">
      {data.coverImage ? (
        <img
          src={data?.coverImage}
          alt={data?.title}
          className="rounded-lg w-full h-60 md:h-80 lg:h-130 object-cover"
        />
      ) : (
        <div className="w-full h-60 md:h-80 lg:h-130 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">No Image Available</p>
        </div>
      )}

      <div className="flex gap-2 items-center">
        <p className="text-xs md:text-sm text-blue-500">{data?.category[0]}</p>
        <p className="text-gray-500">&bull;</p>
        <p className="text-xs md:text-sm text-gray-500">
          {timeAgo(data?.date)}
        </p>
      </div>

      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <p className="text-gray-600 text-xs xl:text-sm whitespace-pre-line">
        {data?.content}
      </p>
    </div>
  );
};

export default BlogDetail;
