import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "./../../models/jobModel.js";

dotenv.config({ path: "../../config.env" });

mongoose
  .connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

// READ JSON FILE
const jobs = JSON.parse(fs.readFileSync(`./jobs.json`, "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Job.create(jobs);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Job.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  // process.exit();
};
 
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);

// deleteData();
// importData();
