const express = require("express");
const router = express.Router();

// Photos routes
const { getPhotosByPageId } = require("../../controllers/photos");

router.get("/page/:id", getPhotosByPageId);

module.exports = router;
