import { BLOG } from "@/lib/schema/schema.db";

export const BlogForm = () => {
  const addPost = async (formData: FormData) => {
    "use server";
    const blog = await BLOG.create({
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    });
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
      <button className="bg-white text-black px-3 py-1 rounded-md">
        Submit
      </button>
    </form>
  );
};
