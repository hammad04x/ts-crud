import express from "express";
import { getUser,addUser, getUserById, editUser, deleteUser } from '../controller/user'
import upload from "../middleware/fileHandler";

const router = express.Router();

router.get("/getuser", getUser)
router.get("/getuserbyid/:id", getUserById)
router.post("/adduser",upload.single("img"), addUser)
router.put("/edituser/:id",upload.single("img"), editUser)
router.delete("/deleteuser/:id", deleteUser)

export default router;