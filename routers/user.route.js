const express=require('express');
const { getAlluser, getOneUser, createUser,deleteUser, updateUser } = require('../controlers/user.controler');
const { deleteOne } = require('../models/user.model');
const router =express.Router();
router.post("/", createUser );
router.get("/", getAlluser );
router.get("/:id", getOneUser );
router.delete("/:id", deleteUser );
router.patch("/:id", updateUser );
// router.get("/id:", getOneUser );

module.exports=router;

