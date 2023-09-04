import React, { Suspense, useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
import useStyles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectJobPosts,
  setLoading,
  setPost,
} from "../../../redux/reducer/jobPostReducer";
// import moment from "moment";
import Loading from "../../../component/Loading";
import {
  getJobPost,
  updateJobPost,
} from "../../../redux/action/jobPostActions";
import { allDepartments } from "../../utils";

const UpdatePost = () => {
  const classes = useStyles();

  const job = useSelector(selectJobPosts);
  const dispatch = useDispatch();
  const params = useParams();

  const [post, setPostData] = useState({});

  useEffect(() => {
    dispatch(getJobPost(params.id));
    setPostData(job.post);
  }, [dispatch, params.id, job.post]);

  const onInputChange = (e) => {
    setPostData({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateJobPost(post));
  };

  if (job.Loading) return <Loading />;

  return (
    <div className={classes.MakePost}>
      <Card className={classes.MakePostCard}>
        <Typography mb={5} variant="h3" align="center" gutterBottom>
          Update Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="postName"
                name="designation"
                label="Post name"
                onChange={onInputChange}
                value={post.designation}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="companyName"
                name="companyName"
                label="Company name"
                onChange={onInputChange}
                value={post.companyName}
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Department*</InputLabel>
                <Select
                  required
                  label="Number of vacancy"
                  id="jobDepartment"
                  name="jobDepartment"
                  onChange={onInputChange}
                  value={post.jobDepartment}>
                  {allDepartments.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="numberOfVacancy"
                name="numberOfVacancy"
                label="Number of vacancy"
                onChange={onInputChange}
                value={post.numberOfVacancy}
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="applyLastDate"
                name="applyLastDate"
                label="Last Apply Date"
                onChange={onInputChange}
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="standard-multiline-static"
                name="jobDescription"
                label="Job Description"
                onChange={onInputChange}
                value={post.jobDescription}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="standard-multiline-static"
                name="jobResponsibility"
                label="Job Responsibility"
                onChange={onInputChange}
                value={post.jobResponsibility}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="standard-multiline-static"
                label="Job Requirements"
                onChange={onInputChange}
                value={post.jobRequirements}
                name="jobRequirements"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="standard-multiline-static"
                label="Job Benefits"
                name="jobBenefits"
                onChange={onInputChange}
                value={post.jobBenefits}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="applyProcess"
                label="Apply Process"
                name="applyProcess"
                onChange={onInputChange}
                value={post.applyProcess}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} align="center">
              <Button
                type="submit"
                variant="contained"
                align="center"
                color="primary">
                Update Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
};

export default UpdatePost;
