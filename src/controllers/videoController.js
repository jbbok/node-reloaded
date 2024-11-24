// const videos = [
//   {
//     id: 1,
//     title: "First Video",
//     createdAt: "2 minutes ago",
//     views: 1,
//     comment: 2,
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "Second Video",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "Third Video",
//     createdAt: "2 minutes ago",
//     views: 59,
//     comment: 2,
//     rating: 5,
//   },
// ];

import { response } from "express";
import videoModel from "../models/video";

export const home = async (req, res) => {
  try {
    const videos = await video.find({});
    return res.render("home", { pageTitle: "Home", videos: [] });
  } catch (error) {
    return res.render("server-error", { error });
  }
};
export const search = (req, res) => res.send("Search Videos");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#{word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  const dbvideo = await video.save();
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Videos");
};
