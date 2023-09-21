import { User } from "../models/user.js";
export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    const keyword = req.query.keyword;
    console.log(keyword);
    res.json({
      success: true,
      users,
    });
  }

  export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const users = await User.create({
      name,
      email,
      password,
    });
    res.status(201).cookie("token", "ankit").json({
      success: true,
      message: "true",
    });
  }

  export const specialFunc = (req, res) => {
    res.json({
      success: true,
      users: "ankit",
    });
  }


  export const userDetils = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    const user = await User.findById(id);
    if(!user){
      res.redirect("/users/new")
    }else{
    res.json({
      success: "true",
      user,
    });
  }
  }