import { useState } from "react";
import BlogList from "./components/blog/BlogList";
import BlogDetail from "./components/blog/BlogDetail";
import CreateBlogSheet from "./components/blog/CreateBlogSheet";

const App = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative md:min-h-screen flex flex-col gap-4 md:flex-row justify-between md:p-4">
      <div className="md:sticky w-fit top-0 left-0 md:w-[50%] lg:w-[35%] max-h-screen overflow-hidden md:overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <BlogList onSelect={setSelected} id={selected} />
      </div>

      <div className="flex flex-col gap-4 items-end md:w-[50%] lg:w-[65%]">
        <CreateBlogSheet />
        <BlogDetail id={selected} />
      </div>
    </div>
  );
};

export default App;
