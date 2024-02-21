import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGODB_URL is not defined");
    }
    const responsedb = await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
