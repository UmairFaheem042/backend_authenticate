const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut } = require("../controllers/user.controller");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);

module.exports = router;
