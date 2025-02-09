const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post(
  "/createPost",
  ensureAuth,
  upload.single("file"),
  postsController.createPost
);

router.put("/likePost/:id", ensureAuth, postsController.likePost);

router.delete("/deletePost/:id", ensureAuth, postsController.deletePost);

router.post("/follow/:userId", ensureAuth, postsController.followUser);
router.delete("/unfollow/:userId", ensureAuth, postsController.unfollowUser);

module.exports = router;
