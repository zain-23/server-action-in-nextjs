import { TypographyH4 } from "@/lib/typography/typography";
import Link from "next/link";
import React from "react";

const AllBlog = ({ blogs }: any) => {
  return (
    <Link href={`/all-blogs/${blogs._id}`}>
      <TypographyH4 key={blogs._id}>{blogs.title}</TypographyH4>
    </Link>
  );
};

export default AllBlog;
