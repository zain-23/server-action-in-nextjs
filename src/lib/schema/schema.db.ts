import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export const BLOG = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
