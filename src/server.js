import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const morganMiddleWare = morgan("dev");
app.use(morganMiddleWare);

// Global Router
const globalRouter = express.Router();

const handleMain = (req, res) => {
  return res.send("Home");
};

globalRouter.get("/", handleMain);

const userRouter = express.Router();

const handleEditUser = (req, res) => {
  return res.send("Edit User");
};

userRouter.get("edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
  return res.send("Watch Video");
};

videoRouter.get("/video", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

// const middleWare = (req, res, next) => {
//   console.log(`{erq.method} ${req.url}`);
//   next();
// };

// const privateMiddleWare = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   console.log("Allowed, You may continue.");
//   next();
// };

const handleHome = (req, res) => {
  return res.end();
};

// const handelProtected = (req, res) => {
//   return res.send("Welcome to the Private Lounge");
// };

// app.use(privateMiddleWare);
app.get("/", handleHome);
app.get("/protected", handelProtected);

const handleListening = () =>
  console.log(`Server Listning on Port http://localhost:${PORT} ☃`);

app.listen(4000, handleListening);
