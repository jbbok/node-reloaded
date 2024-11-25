import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// app.use(privateMiddleWare); // "/" 경로는 globalRouter에서 처리
// app.get("/", handleHome); // "/users" 경로는 userRouter에서 처리
// app.get("/protected", handelProtected); // "/video" 경로는 videoRouter에서 처리

export default app;
