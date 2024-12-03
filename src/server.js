import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddleware } from "./middlewares";
import { Store } from "express-session";
import MongoStore from "connect-mongo";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello",
    resave: false,
    saveUninitialized: false,
    Store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/nodejs" }),
  })
);

// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     console.log(sessions);
//     next();
//   }); // 서버와 클라이언트가 통신하는 순간의 섹션의 값을 모두 찾아올 수 있는 함수
// });

app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;

// 로컬스토리지 쿠키값
// 몽고디비서버
// 쿠키값 새로고침을 할때마다 다시 가져옴
// 최초에 전달한 쿠키
// 섹션 : 메모리
// 쿠키 값은 다 다르다.
// 섹션 : 고유한 아이디
// 섹션 -> 쿠키 -> 고유한 아이디
// locals
