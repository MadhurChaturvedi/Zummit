const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User/userModel");
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = asyncHandler(async (req, res) => {
  // control variable hai bhai
  let isValid = false;
  let msg = "";
  let email = "";
  let phone = "";

  const { name, input, password, role } = req.body;

  console.log(name, input, password, role);
  if (password.length < 6) {
    res.status(400);
    throw new Error("password must be upto 6 character");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(input)) {
    email = input;
    isValid = true;
    console.log(email);
    msg = "Valid email address.";
  }

  const phoneRegex = /^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;
  if (phoneRegex.test(input)) {
    phone = input;
    isValid = true;
    console.log(phone);
    msg = "Valid phone number.";
  }

  if (!isValid) {
    return res
      .status(400)
      .json({ success: false, msg: "Invalid email or phone number." });
  }

  const User = require("../../models/User/userModel");

  const userExists = await User.findOne({ input });
  if (userExists) {
    res.status(400);
    throw new Error("User already Registered");
  }

  const user = await User.create({
    name,
    input,
    role,
    password,
  });

  if (user) {
    const { _id, input, role } = user;
    console.log("ID is ", _id);
    const token = generateToken(_id);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      //  secure:true,  //for deployment
      //  sameSite:none
    });
    // send user data
    res.status(201).json({
      success: true,
      _id,
      name,
      input,
      role,
      token,
      message: "regisered successfully",
    });
  } else {
    res.status(400).json({ error: "Invalid user Data" });
  }
});

const loginUser = async (req, res) => {
  try {
    const { input, password } = req.body;

    if (!input || !password) {
      res.status(400);
      throw new Error("please add email/phone & password");
    }

    const user = await User.findOne({ input });

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!user) {
      res.status(400);
      throw new Error("user does not exist");
    }
    const token = generateToken(user._id);
    if (user && passwordIsCorrect) {
      const newUser = await User.findOne({ input }).select("-password");
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        // secure:true,
        // sameSite:none,
      });

      res.status(201).json({ newUser, Authorization: token });
    } else {
      res.status(400);
      throw new Error("Invalid email or Password");
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "successfully logout",
  });
});

const getUser = asyncHandler(async (req, res) => {
  const { userToken } = req.body;
    if (!userToken) {
        return res.status(401).json({ error: "Unauthorized user" });
    }
    try {
      const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
      const userId = decoded.id;
      console.log(decoded);
      const user = await User.findById(userId).select('-password');

      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({
          success: true,
          data: user,
          message: "User retrieved successfully",
      });
  } catch (error) {
      console.error(`Error verifying user by token: ${error.message}`);
      res.status(500).json({ message: "Internal server error" });
  }
});

const VerifyClient_ByToken = asyncHandler(async (req, res) => {
  try {
    const authToken = req.cookies.token;
    if (!authToken) {
      return res.status(401).json({ error: "Unauthorized user" });
    }

    const { id } = jwt.verify(authToken, process.env.JWT_SECRET);

    const client = await User.findOne({ _id: id });

    if (!client._id) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const { _id, name, role } = client;

    return res.status(200).json({
      client: { _id, name, role },
      success: true,
      message: "User authorized",
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  VerifyClient_ByToken,
};
