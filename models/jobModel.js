import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: [true, "Job must be belong to a company."],
  },
  department: {
    type: String,
    enum: [
      "Sales And Marketing",
      "Digital Marketing",
      "Management",
      "Human Resource",
      "Administration",
      "Development",
      "Engineering",
      "Creative",
    ],
    required: [true, "Job must belong to a department of a company"],
  },
  vacancy: {
    type: Number,
    default: 1,
    required: [true, "Job must have a vacancy"],
  },
  description: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Full Time", "Part Time"],
  },
  salary: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    enum: ["On Site", "Remote"],
  },
  address: {
    type: String,
    requred: true,
  },
  applyLastDate: {
    type: Date,
    required: [true, "Job must have a last date of apply"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", JobSchema);
export default Job;
