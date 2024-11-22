import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

// 이 순서를 잘 지켜야 함! 안그러면 upload를 id로 인식함
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id(\\d+)").get(watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
