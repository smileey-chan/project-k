const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const register = async (req, res) => {
//   const { name, email, password, role, phoneNumber, designation } = req.body;
//   console.log("req ",req.body);
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       phoneNumber,
//       designation,
//     });

//     res.status(201).json({ msg: "User Registered Successfully!" });
//   } catch (error) {
//      console.error(error);
//   if (error.code === 11000) {
//     return res.status(400).json({ msg: "Email already exists" });
//   }
//     res.status(500).json({ msg: "Error", error: error.message });
//   }
// };

const register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
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


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1️⃣ Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // 2️⃣ Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // 3️⃣ Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role }, // payload
      "yourSecretKey", // replace with your secret key, keep it in .env
      { expiresIn: "1h" } // token expiry
    );

    // 4️⃣ Send response
    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = { login, register };
