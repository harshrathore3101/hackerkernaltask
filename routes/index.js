var express = require("express");
var router = express.Router();
const userModel = require("../model/userSchema");
const taskModel = require("../model/taskSchema");

router.get("/", (req, res) => {
  try {
    res.status(200).render("index");
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

router.get("/userPage", (req, res) => {
  try {
    res.status(200).render("createUser");
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

router.get("/taskPage", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).render("createTask", { allUsers });
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

router.post("/createUser", async (req, res) => {
  try {
    const user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.number,
    });
    res.status(200).send({
      success: true,
      message: "User Created",
      user,
    });
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

router.post("/createTask", async (req, res) => {
  try {
    const task = await taskModel.create({
      name: req.body.name,
      type: req.body.type,
      userid: req.body.user,
    });
    // var userId = req.body.user;
    // // userId.forEach(element => {
    // //   task.userid.push(element)
    // // });
    // task.userid = userId
    // await task.save();
    const selectedUser = await userModel.findById({ _id: req.body.user });
    selectedUser.taskid = task._id;
    const user = await selectedUser.save();
    res.status(200).send({
      success: true,
      message: "Task Created",
      task,
      user,
    });
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

router.get("/allUser", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).render("allUser", { allUsers });
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

router.get("/showTable",async (req,res) =>{
  try {
    const allTask = await taskModel.find().populate("userid");
    res.status(200).render("allTask",{allTask})
    // res.json(allTask)
  } catch (error) {
    res.status(500).render("error", { error });
    
  }
});

router.get("/deletUser/:id", async (req, res) => {
  try {
    await userModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).redirect("/alluser");
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

module.exports = router;
