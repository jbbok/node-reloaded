import express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// 이 순서를 잘 지켜야 함! 안그러면 upload를 id로 인식함
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
