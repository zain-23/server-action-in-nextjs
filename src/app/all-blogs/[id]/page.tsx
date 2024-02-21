import { BLOG } from "@/lib/schema/schema.db";
import {
  TypographyBlockquote,
  TypographyH4,
} from "@/lib/typography/typography";
import React from "react";

const Page = async ({ params }: { params: string }) => {
  const { id }: any = params;
  const filterBlog = await BLOG.findById(id);

  return (
    <div>
      <TypographyH4>{filterBlog.title}</TypographyH4>
      <TypographyBlockquote>{filterBlog.body}</TypographyBlockquote>
    </div>
  );
};

export default Page;
