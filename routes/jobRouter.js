import express from "express";
import { deleteJob, getAllJobs, getMyJobs, getSingleJob, postJob, updateJob } from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/getAllJobs",getAllJobs);
router.post("/postJobs",isAuthenticated,postJob);
router.get("/getMyJobs",isAuthenticated,getMyJobs);
router.put("/updateJobs/:id",isAuthenticated,updateJob);
router.delete("/deleteJobs/:id",isAuthenticated,deleteJob);
router.get("/:id",isAuthenticated,getSingleJob);


export default  router;