import User from "../../models/user.js";

async function checkUser(email, password) {
  const user = await User.find.find({ email: email });
  const match = await bcrypt.compare(password, user.passwordHash);

  if (match) {
    return true;
  }
}

export default checkUser;
