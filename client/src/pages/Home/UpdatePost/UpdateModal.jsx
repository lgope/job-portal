import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Modal,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { allDepartments, jobLocations, jobTypes } from "../../utils";
import { updateJobPost } from "../../../redux/action/jobPostActions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95vw", md: "80vw" },
  height: { xs: "95vh", md: "80vh" },
  boxShadow: 24,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};
const crossStyle = {
  position: "absolute",
  top: "-11px",
  right: "-11px",
  backgroundColor: "#42dd42",
  color: "#fff",
  padding: "4px",
  borderRadius: "2rem",
  cursor: "pointer",
};

const UpdateModal = ({ openModal, setOpenModal, post }) => {
  const dispatch = useDispatch();

  const [jobPost, setJobPostData] = useState(post);

  const onInputChange = (e) => {
    setJobPostData({
      ...jobPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnUpdate = (e) => {
    e.preventDefault();
    dispatch(updateJobPost(jobPost));

    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box
          sx={{
            height: "90%",
            overflowY: "scroll",
            mb: "18px",
            paddingTop: "8px",
          }}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="designation"
                  name="designation"
                  label="Designation"
                  value={jobPost.designation}
                  onChange={onInputChange}
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
                  value={jobPost.company}
                  onChange={onInputChange}
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
                    value={jobPost.location}
                    onChange={onInputChange}>
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
                  value={jobPost.timing}
                  onChange={onInputChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Address"
                  name="address"
                  value={jobPost.address}
                  onChange={onInputChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <div className="form-number-input">
                  <input
                    className="number-input-field"
                    name="vacancy"
                    type="number"
                    title="Vacancy"
                    value={jobPost.vacancy}
                    onChange={onInputChange}
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
                    value={jobPost.department}
                    onChange={onInputChange}>
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
                    value={jobPost.type}
                    onChange={onInputChange}>
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
                  value={jobPost.description}
                  onChange={onInputChange}
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
                  value={jobPost.responsibilities}
                  onChange={onInputChange}
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
                  value={jobPost.requirements}
                  onChange={onInputChange}
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Qualifications"
                  name="qualifications"
                  value={jobPost.qualifications}
                  onChange={onInputChange}
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
                  value={jobPost.benefits}
                  onChange={onInputChange}
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
                  value={jobPost.salary}
                  onChange={onInputChange}
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
                  onChange={onInputChange}
                  autoComplete="given-name"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
        <Button
          sx={{
            padding: "8px 30px",
            fontSize: "14px",
            mt: "auto",
          }}
          variant="contained"
          color="success"
          onClick={handleOnUpdate}>
          UPDATE CHANGES
        </Button>
        <CancelOutlinedIcon
          sx={crossStyle}
          onClick={() => setOpenModal(false)}
        />
      </Box>
    </Modal>
  );
};

UpdateModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  post: PropTypes.object,
};

export default UpdateModal;
