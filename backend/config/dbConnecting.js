import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });
export const connectDatabase = () => {
  let DB_URI = "";
  if (process.env.MODE === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
  if (process.env.MODE === "PRODUCTION") DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI).then((con) => {
    console.log(
      `Mongodb database connected with host  ${con?.connection?.host}`
    );
  });
};
