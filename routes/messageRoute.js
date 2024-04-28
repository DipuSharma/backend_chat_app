import express from "express";
import { getMessage, sendMessage, updateMessage, removeMessage } from "../controllers/messageController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAuthenticated,sendMessage);
router.route("/:id").get(isAuthenticated, getMessage);
router.route("/update/:id/:msg_id").patch(isAuthenticated, updateMessage);
router.route("/delete/:id").delete(isAuthenticated, removeMessage);

export default router;