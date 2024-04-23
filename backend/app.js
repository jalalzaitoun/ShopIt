import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbConnecting.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
const app = express();
app.use(
  express.json({
    limit: "10mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(cookieParser());

connectDatabase();
//import all routes
import productRoute from "./routes/products.js";
import authRoute from "./routes/auth.js";
import orderRouter from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";
import ErrorMiddlware from "./middlware/error.js";
// import { fileURLToPath } from "url";

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
  SameSite: "None",
  withCredentials: true,
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: "Content-Range,X-Content- Range",
  methods: "GET, POST, PUT ,DELETE",
};
app.use(cors(corsOptions));

app.use("/api/v1", productRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", orderRouter);
app.use("/api/v1", paymentRoutes);

if (process.env.MODE === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../front/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../front/build/index.html"));
  });
}

app.use(ErrorMiddlware);
if (process.env.MODE !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Serve started on PORT : ${process.env.PORT} in ${process.env.MODE} MODE`
  );
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
