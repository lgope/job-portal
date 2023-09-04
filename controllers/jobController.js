import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import moment from 'moment';
import * as factory from './handlerFactory.js';
import Job from '../models/jobModel.js';

// create Job
export const createJobPost = factory.createOne(Job);

// get one
export const getJob = factory.getOne(Job);

// get all Jobs
export const getAllJob = factory.getAll(Job);
// update Job
export const updateJob = factory.updateOne(Job);
// delete Job by id
export const deleteJob = factory.deleteOne(Job);

// filter Job by date
export const getJobsByDate = catchAsync(async (req, res, next) => {
  const { userEmail, fromDate, toDate } = req.params;

  const fromD = moment(fromDate).subtract(1, 'days').format().split('T')[0];
  const toD = moment(toDate).add(1, 'days').format().split('T')[0];
  let filteredData;

  if (userEmail) {
    filteredData = await Job.find({
      userEmail,
      createdAt: {
        $gt: `${fromD}T00:00:00.000+00:00`,
        $lt: `${toD}T00:00:00.000+00:00`,
      },
    });
  } else {
    filteredData = await Job.find({
      createdAt: {
        $gt: `${fromD}T00:00:00.000+00:00`,
        $lt: `${toD}T00:00:00.000+00:00`,
      },
    });
  }

  res.status(200).json(filteredData);
});
