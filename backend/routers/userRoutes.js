import express from "express";
import { upload } from "../middleware/cloudinary.js";
import {
  addnewUser,
  getAllUser,
  uploadUserImage,
} from "./../controllers/userConroller.js";
import { userAuth } from "../middleware/auth.js";
const userRoutes = express();

userRoutes.get("/getAllUser", getAllUser);
userRoutes.post("/userLogin", userAuth);
userRoutes.post("/uploadImage", upload.single("profileImage"), uploadUserImage);
userRoutes.post("/addnewUser",upload.single("profileImage"), addnewUser);

export default userRoutes;
