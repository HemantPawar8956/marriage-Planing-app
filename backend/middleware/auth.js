import jwt from "jsonwebtoken";
import User from "../modals/userModel.js";
import bcrypt from "bcrypt";

export const userAuth = async (req, res, next) => {
  let { email, password, phone } = req.body;

  let user;
  if (email) {
    user = await User.find({ email });
  } else if (phone) {
    user = await User.find({ email });
  }

  if (!user.length) {
    return res.status(403).send({ message: "User Not Found" });
  }

  const isPassword = await bcrypt.compare(password, response[0].password);
  if (!isPassword) {
    return res.status(403).send({ message: "Invalid Password" });
  }

  let token = jwt.sign(
    {
      email,
      userName: response[0].name,
      userId: response[0]["_id"],
    },
    process.env.secreat_Key,
    {
      expiresIn: "24h",
    }
  );
  res.status(200).send({ token: token });
};
