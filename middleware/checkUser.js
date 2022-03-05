import User from "../models/user.js";
import bcrypt from "bcrypt";

const checkUser = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    return match;
  } else {
    return false;
  }
};

export default checkUser;
