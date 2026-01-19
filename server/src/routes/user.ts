import express from "express";
import { getUser,addUser } from '../controller/user'
import upload from "../middleware/fileHandler";

const router = express.Router();

router.get("/getuser", getUser)
router.post("/adduser",upload.single("img"), addUser)

export default router;