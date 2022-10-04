const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, postsController.getPosts);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likepost/:id", postsController.likePost);

router.put("/bookmarkPost/:id", postsController.bookmarkPost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;