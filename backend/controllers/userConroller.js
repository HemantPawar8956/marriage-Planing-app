import User from "../modals/userModel.js";
import { imageUploadUtilis } from "../middleware/cloudinary.js";
import bcrypt from "bcrypt";

export const getAllUser = async (req, res) => {
  try {
    let response = await User.find();
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    console.log("error while fetching all the users");
    res.status(500).send("error while fetching all the users");
  }
};

export const uploadUserImage = async (req, res) => {
  try {
    let id = req.body.id;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    let uploadedImage = await imageUploadUtilis(req.file);
    await User.findByIdAndUpdate(
      id,
      { $set: { profileImage: uploadedImage.secure_url } },
      { new: true }
    );

    return res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: uploadedImage.secure_url, // Cloudinary URL
    });
  } catch (error) {
    console.log("error while uploading the image", error);
    return res
      .status(500)
      .json({ error: "Image upload failed", details: error.message });
  }
};

export const addnewUser = async (req, res) => {
  let email = req.body.email;
  let data = {
    ...req.body,
    password: await bcrypt.hash(req.body.password, 10),
  };
  try {
    let alreadyUser = await User.find({ email });
    if (alreadyUser[0]) {
      res.status(201).send({ message: "already a User", data: alreadyUser });
    } else {
      let response = await User(data);
      let result = await response.save();
      res.status(201).send(result);
    }
  } catch (error) {
    console.log("error while adding the user", error);
    res.status(500).send("error while adding the user");
  }
};
