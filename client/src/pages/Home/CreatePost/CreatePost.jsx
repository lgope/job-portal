import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import useStyles from "../../../styles/styles";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useDispatch } from "react-redux";
import { postJob } from "../../../redux/action/jobPostActions";
import { allDepartments, jobLocations, jobTypes } from "../../utils";

const CreatePost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      designation,
      company,
      department,
      vacancy,
      description,
      responsibilities,
      requirements,
      benefits,
      applyLastDate,
      location,
      address,
      timing,
      salary,
      type,
    } = e.target;

    const job = {
      user: user.email,
      designation: designation.value,
      company: company.value,
      vacancy: vacancy.value,
      department: department.value,
      description: description.value,
      responsibilities: responsibilities.value,
      requirements: requirements.value,
      benefits: benefits.value,
      applyLastDate: applyLastDate.value,
      timing: timing.value,
      location: location.value,
      address: address.value,
      type: type.value,
      salary: salary.value,
    };

    dispatch(postJob(job));
    navigate("/view-post", { replace: true });

    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className={classes.MakePost}>
        <Card className={classes.MakePostCard}>
          <Typography mb={5} variant="h3" align="center" gutterBottom>
            Create Job Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="designation"
                  name="designation"
                  label="Designation"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="company"
                  name="company"
                  label="Company Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Location*</InputLabel>
                  <Select
                    required
                    label="Location"
                    id="location"
                    name="location"
                    onChange={(e) => console.log("location ", e.target.value)}>
                    {jobLocations.map((location, index) => (
                      <MenuItem key={index} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Timing"
                  name="timing"
                  multiline
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Address"
                  name="address"
                  multiline
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <div className="form-number-input">
                  <input
                    className="number-input-field"
                    name="vacancy"
                    type="number"
                    min={1}
                    step={1}
                    placeholder="Vacancy"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Department*</InputLabel>
                  <Select
                    required
                    label="Department"
                    id="department"
                    name="department"
                    onChange={(e) =>
                      console.log("department ", e.target.value)
                    }>
                    {allDepartments.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Type*</InputLabel>
                  <Select
                    required
                    label="Type"
                    id="type"
                    name="type"
                    onChange={(e) => console.log("type ", e.target.value)}>
                    {jobTypes.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  name="responsibilities"
                  label="Responsibilities"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Requirements"
                  name="requirements"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Benefits"
                  name="benefits"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Salary"
                  name="salary"
                  multiline
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="applyLastDate"
                  name="applyLastDate"
                  label="Last Apply Date"
                  fullWidth
                  autoComplete="given-name"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={12} align="center">
                <Button
                  type="submit"
                  variant="contained"
                  align="center"
                  color="primary"
                  endIcon={<PostAddIcon />}>
                  Post
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default CreatePost;
