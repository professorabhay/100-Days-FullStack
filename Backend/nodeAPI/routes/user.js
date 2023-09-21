import  express  from "express";
import { getAllusers, getUserdetail, newUser, special } from "../controllers/user.js";

const router = express.Router();

router.get("all", getAllusers);
router.post("new", newUser)
router.get("/special", special)
router.get("/userid/:id", getUserdetail);

export default router;