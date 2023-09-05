import { Fragment, useContext } from "react";
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
import { AuthContext } from "../../../contexts/AuthProvider";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useDispatch } from "react-redux";
import { postJob } from "../../../redux/action/jobPostActions";
import {
  allDepartments,
  capitalizeFirstLetter,
  jobLocations,
  jobTypes,
} from "../../utils";

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
      qualifications,
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
      qualifications: qualifications.value,
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
    navigate("/", { replace: true });

    e.target.reset();
  };

  return (
    <Fragment>
      <div className={classes.MakePost}>
        <Card className={classes.MakePostCard}>
          <Typography mb={5} variant="h3" align="center" gutterBottom>
            Post New Job
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
                    name="location">
                    {jobLocations.map((location, index) => (
                      <MenuItem key={index} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Department*</InputLabel>
                  <Select
                    required
                    label="Department"
                    id="department"
                    name="department">
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
                  <Select required label="Type" id="type" name="type">
                    {jobTypes.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* combined all similar data */}
              {[
                "description",
                "responsibilities",
                "requirements",
                "qualifications",
                "benefits",
              ].map((atr, index) => (
                <Grid item xs={12} sm={12} key={index}>
                  <TextField
                    required
                    id="standard-multiline-static"
                    name={atr}
                    label={capitalizeFirstLetter(atr)}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              ))}

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

              {["salary", "timing", "address"].map((atr, index) => (
                <Grid item xs={12} sm={12} key={index}>
                  <TextField
                    required
                    id="standard-multiline-static"
                    label={capitalizeFirstLetter(atr)}
                    name={atr}
                    multiline
                    fullWidth
                  />
                </Grid>
              ))}

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
    </Fragment>
  );
};

export default CreatePost;
