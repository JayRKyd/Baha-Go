const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");  
const aboutController = require("../controllers/about")
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile); //put back ensure auth
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.get("/my-restaurant", ensureAuth, postsController.getPosts);
router.get("/bookmarks", ensureAuth, postsController.bookmarkPost);
router.post("/signup", authController.postSignup);
router.get("/about", aboutController.getAbout);

module.exports = router;