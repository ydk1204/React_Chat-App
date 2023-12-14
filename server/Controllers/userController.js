const userModel = require("../Models/userModel");
const bycrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user) return res.status(400).json("이미 가입된 이메일 입니다.");

    if (!name || !email || !password) return res.status(400).json("모든 정보를 정확히 입력해주세요.");

    if (!validator.isEmail(email)) return res.status(400).json("이메일 양식을 확인해 주세요.");

    if (!validator.isStrongPassword(password)) return res.status(400).json("비밀번호를 더 강력하게 만들어주세요.");

    user = new userModel({ name, email, password });
    
    const salt = await bycrypt.genSalt(10);
    user.password = await bycrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, name, email, token });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) return res.status(400).json("이메일 혹은 비밀번호를 확인해주세요.");

    const isValidPassword = await bycrypt.compare(password, user.password);

    if (!isValidPassword) return res.status(400).json("이메일 혹은 비밀번호를 확인해주세요.");

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, name: user.name, email, token });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const findUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.findById(userId);

    res.status(200).json(user);
  } catch (err) { 
    console.log(err);
    res.status(500).json(err);
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json(users);
  } catch (err) { 
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = {registerUser, loginUser, findUser, getUsers};