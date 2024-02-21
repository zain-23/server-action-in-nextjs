import AllBlog from "@/components/sitecomponents/allBlog";
import { BlogForm } from "@/components/sitecomponents/forms/form";
import { BLOG } from "@/lib/schema/schema.db";
import { TypographyH1 } from "@/lib/typography/typography";
import { ObjectId } from "mongoose";

interface MyData {
  _id: ObjectId;
  title: string;
  body: string;
  __v: number;
}

const Page = async () => {
  const blogs: MyData[] = await BLOG.find({});
  return (
    <div className="max-w-md w-full mx-auto">
      <BlogForm />
      <section className="mt-10">
        <TypographyH1>All Blogs</TypographyH1>
        <div className="flex flex-col gap-y-4">
          {blogs.map((data) => (
            <AllBlog blogs={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
