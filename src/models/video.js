import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: String,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const video = mongoose.model("Video", videoSchema);
export default video;
