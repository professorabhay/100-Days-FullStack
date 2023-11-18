import  express  from "express";
import { getAllusers, getUserdetail, newUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllusers);
router.post("/new", register)
router.post("/login", login)
// router.get("/special", special)
router.get("/userid/:id", getUserdetail);

export default router;