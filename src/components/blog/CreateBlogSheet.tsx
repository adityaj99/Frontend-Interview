import { useState, type FormEvent } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlog } from "@/hooks/useBlogs";

export default function CreateBlogSheet() {
  const [open, setOpen] = useState(false);
  const mutation = useCreateBlog();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;
    const category = (
      form.elements.namedItem("category") as HTMLInputElement
    ).value
      .split(",")
      .map((c) => c.trim().toUpperCase());
    const coverImage = (
      form.elements.namedItem("coverImage") as HTMLInputElement
    ).value;
    const content = (form.elements.namedItem("content") as HTMLInputElement)
      .value;

    mutation.mutate(
      {
        title,
        description,
        category,
        coverImage,
        content,
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => setOpen(false),
      },
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>+ New Blog</Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="max-w-none overflow-y-auto p-6"
        style={{
          width: "50vw",
          maxWidth: "50vw",
          minWidth: "320px",
        }}
      >
        <SheetHeader>
          <SheetTitle>Create Blog</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <Input
            className="text-xs"
            name="title"
            placeholder="Title"
            required
          />
          <Input
            className="text-xs"
            name="category"
            placeholder="Categories (comma separated)"
            required
          />
          <Input
            className="text-xs"
            name="coverImage"
            placeholder="Cover Image URL"
            required
          />
          <Textarea
            className="text-xs"
            name="description"
            placeholder="Short Description"
            required
          />
          <Textarea
            className="text-xs"
            name="content"
            placeholder="Full Blog Content"
            required
          />

          <Button
            disabled={mutation.isPending}
            type="submit"
            className="w-full"
          >
            {mutation.isPending ? "Creating..." : "Create Blog"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
