import FormButton from "@/lib/button";
import { BLOG } from "@/lib/schema/schema.db";
import { revalidatePath } from "next/cache";

export const BlogForm = () => {
  const addPost = async (formData: FormData) => {
    "use server";
    await BLOG.create({
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    });
    revalidatePath("/all-blogs");
  };
  return (
    <form className="space-y-4" action={addPost}>
      <input
        type="text"
        name="title"
        className="w-full h-10 p-2 rounded-md bg-transparent border"
        placeholder="enter blog title"
      />

      <textarea
        rows={10}
        name="body"
        placeholder="enter blog body"
        className="w-full p-2 rounded-md bg-transparent resize-none border"
      ></textarea>
      <FormButton />
    </form>
  );
};
