const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        user: req.user.id,
      });

      console.log("Comment has been added!");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      console.log(err);
      res.redirect("/post/" + req.params.id);
    }
  },

  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);

      // Check if comment exists
      if (!comment) {
        return res.redirect("/post/" + comment.post);
      }

      // Check if user owns the comment
      if (comment.user.toString() !== req.user.id) {
        return res.redirect("/post/" + comment.post);
      }

      await Comment.deleteOne({ _id: req.params.id });
      console.log("Comment deleted");

      res.redirect("/post/" + comment.post);
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },

  likeComment: async (req, res) => {
    try {
      await Comment.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );

      const comment = await Comment.findById(req.params.id);
      console.log("Comment liked!");

      res.redirect("/post/" + comment.post);
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },
};
