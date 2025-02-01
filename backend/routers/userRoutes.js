import express from "express";
import { upload } from "../middleware/cloudinary.js";
import {
  addnewUser,
  getAllUser,
  uploadUserImage,
} from "./../controllers/userConroller.js";
const userRoutes = express();

userRoutes.get("/getAllUser", getAllUser);
userRoutes.post("/uploadImage", upload.single("profileImage"), uploadUserImage);
userRoutes.post("/addnewUser", addnewUser);

export default userRoutes;
