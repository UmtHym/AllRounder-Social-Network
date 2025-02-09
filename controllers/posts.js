const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id })
        .sort({ createdAt: "desc" })
        .lean();
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },

  getFeed: async (req, res) => {
    try {
      const posts = await Post.find()
        .populate("user", "userName") // Add user info to posts
        .sort({ createdAt: "desc" })
        .lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate(
        "user",
        "userName"
      );
      if (!post) {
        return res.status(404).redirect("/feed");
      }

      const comments = await Comment.find({ post: req.params.id })
        .populate("user", "userName")
        .sort({ createdAt: "desc" })
        .lean();

      res.render("post.ejs", {
        post: post,
        user: req.user,
        comments: comments,
      });
    } catch (err) {
      console.log(err);
      res.redirect("/feed");
    }
  },

  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });

      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
      res.redirect("/profile");
    }
  },

  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.redirect("/feed");
    }
  },

  deletePost: async (req, res) => {
    try {
      // Find post and check ownership
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.redirect("/profile");
      }

      if (post.user.toString() !== req.user.id) {
        return res.redirect("/profile");
      }

      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);

      // Delete post from db (using deleteOne instead of remove)
      await Post.deleteOne({ _id: req.params.id });

      // Delete associated comments
      await Comment.deleteMany({ post: req.params.id });

      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
      res.redirect("/profile");
    }
  },

  followUser: async (req, res) => {
    try {
      if (!req.user.following.includes(req.params.userId)) {
        req.user.following.push(req.params.userId);
        await req.user.save();
        res.status(200).json({ message: "User followed successfully" });
      } else {
        res.status(400).json({ message: "User is already being followed" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  unfollowUser: async (req, res) => {
    try {
      if (req.user.following.includes(req.params.userId)) {
        req.user.following.pull(req.params.userId);
        await req.user.save();
        res.status(200).json({ message: "User unfollowed successfully" });
      } else {
        res.status(400).json({ message: "User is not being followed" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
