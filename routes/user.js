import express from "express";
import { getAllUsers, register, specialFunc, userDetils } from "../controllers/user.js";
import { User } from "../models/user.js";

const router = express.Router();
router.post("/new", register);

router.get("/userid/special", specialFunc);

router.get("/all", getAllUsers);

router.get("/userid/:id", userDetils);
export default router;
