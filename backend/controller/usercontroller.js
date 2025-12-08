// userController.js
const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password, role, phoneNumber, designation } = req.body;
  console.log("req ",req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      phoneNumber,
      designation,
    });

    res.status(201).json({ msg: "User Registered Successfully!" });
  } catch (error) {
     console.error(error);
  if (error.code === 11000) {
    return res.status(400).json({ msg: "Email already exists" });
  }
    res.status(500).json({ msg: "Error", error: error.message });
  }
};

module.exports = register;
