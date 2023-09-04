import PropTypes from "prop-types";
import useStyles from "../../../styles/styles";

import {
  Card,
  Typography,
  Grid,
  CardActionArea,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteJobPost } from "../../../redux/action/jobPostActions";
import { useDispatch } from "react-redux";

const ViewPostCard = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    _id,
    jobTitle,
    companyName,
    jobDepartment,
    numberOfVacancy,
    jobDescription,
    jobResponsibility,
    jobRequirements,
    jobBenefits,
    applyProcess,
    applyLastDate,
    createdAt,
  } = post;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card sx={{ display: "flex" }} className={classes.singlePost}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" align="center" variant="h5">
              <b>{jobTitle}</b>
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary">
              Company Name: {companyName} - Number of Vacancy: {numberOfVacancy}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary">
              Job Posted: {moment(createdAt).fromNow()}, Last Apply Date:{" "}
              {moment(applyLastDate).format("MMM Do YYYY")}
            </Typography>
            <br />
            <div className={classes.desc}>
              <Typography variant="subtitle1" paragraph>
                <b>Job Description:</b>{" "}
                {jobDescription.split("-").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <b>Job Requirements:</b>{" "}
                {jobRequirements.split("-").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <b>Job Benefits:</b>{" "}
                {jobBenefits.split("-").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <b>Department:</b> {jobDepartment}
              </Typography>
            </div>
            <Typography variant="subtitle1" align="center" color="primary">
              <b>How Can Apply:</b> {applyProcess}
            </Typography>
            <Stack spacing={2} direction="row" className={classes.viewBtn}>
              <Link to={`/update-post/${_id}`}>
                <Button variant="contained" startIcon={<EditIcon />}>
                  Edit
                </Button>
              </Link>
              <Button
                onClick={() => dispatch(deleteJobPost(_id))}
                variant="outlined"
                startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

ViewPostCard.propTypes = {
  post: PropTypes.object,
};

export default ViewPostCard;
