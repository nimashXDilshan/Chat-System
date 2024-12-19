import express from "express";

import {getMessages, sendMessage } from "../controllers/messageController.js";

import protectRoute from "../middleware/protectRouteMiddleware.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);



// before pass the messages to controllers we check if the sender is log in using protectRoute(middleware)
router.post("/send/:id", protectRoute, sendMessage);
// :id is the receiver_id

export default router;