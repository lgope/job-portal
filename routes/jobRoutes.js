import express from 'express';
import * as jobController from '../controllers/jobController.js';
import { validateToken } from '../middleware/auth.js';

const router = express.Router();

router.use(validateToken);
// @route GET api/user/
// @desc Get All User Job
// @access only For user and Private
router.route('/get-all-job').get(jobController.getAllJob);

router.get('/job/:id', jobController.getJob);

// @route POST api/admin/assign-Job
// @desc Create An assign Job
// @access only For Admin and Private
router.post('/post-job', jobController.createJobPost);

router.patch('/update-job/:id', jobController.updateJob);

router.delete('/delete-job/:id', jobController.deleteJob);

// @route GET api/Job/get-works-by-date
// @desc get-all-Jobs
// @access only For Admin and Private
router.get(
  '/get-jobs-by-date/:userEmail/:fromDate/:toDate',
  jobController.getJobsByDate
);

router.get(
  '/get-jobs-by-date/:fromDate/:toDate',
  jobController.getJobsByDate
);

export default router;
