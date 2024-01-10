import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)
// router.route("/login").post(loginUser)

export default router


// Recieved URL from routes - http:localhost:8000/user
// Now become - http:localhost:8000/api/v1/users/register