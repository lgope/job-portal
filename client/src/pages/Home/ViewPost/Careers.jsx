import { Fragment, Suspense, useContext, useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Container,
  List,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import useStyles from "../../../styles/styles";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import EditNoteIcon from "@mui/icons-material/EditNote";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useSelector, useDispatch } from "react-redux";
import { selectJobPosts } from "../../../redux/reducer/jobPostReducer";
import {
  deleteJobPost,
  getAllJobPost,
} from "../../../redux/action/jobPostActions";
import Loading from "../../../component/Loading";
import { allDepartments } from "../../utils";
import JobModal from "./JobModal.jsx";
import UpdateModal from "../UpdatePost/UpdateModal";
import { AuthContext } from "../../../contexts/AuthProvider";

const Careers = () => {
  const classes = useStyles();

  // auth
  const { user } = useContext(AuthContext);

  // redux
  const job = useSelector(selectJobPosts);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState({ 0: false });
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [showPost, setShowPost] = useState({});

  useEffect(() => {
    dispatch(getAllJobPost());
  }, [dispatch]);

  const handleShowJob = (index) => {
    setExpanded({ [index]: !expanded[index] || false });
  };

  const handleShowModal = (post) => {
    setOpenModal(true);
    setShowPost(post);
  };

  const handleShowUpdateModal = (post) => {
    setOpenUpdateModal(true);
    setShowPost(post);
  };

  return (
    <div className={classes.jobPost}>
      <Suspense fallback={<Loading />}>
        <Container>
          <Box sx={{ marginTop: "60px" }}>
            {allDepartments.map((department, index) => (
              <Paper key={index} className="job-department-list">
                <Box
                  onClick={() => handleShowJob(index)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 0",
                  }}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "17px", md: "19px" },
                      fontWeight: "600",
                      width: "100%",
                    }}>
                    {" "}
                    {department}
                  </Typography>
                  {!expanded[index] ? (
                    <AddIcon
                      onClick={() => handleShowJob(index)}
                      expand={expanded}
                      sx={{ cursor: "pointer" }}
                      aria-expanded={expanded}
                      aria-label="show job list"
                    />
                  ) : (
                    <RemoveIcon
                      onClick={() => handleShowJob(index)}
                      expand={expanded}
                      sx={{ cursor: "pointer" }}
                      aria-expanded={expanded}
                      aria-label="show job list"
                    />
                  )}
                </Box>
                <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                  <List component="div">
                    {job.posts?.map(
                      (post) =>
                        department === post.department && (
                          <ListItemText
                            key={post._id}
                            className="job-list"
                            sx={{
                              bgcolor: "background.paper",
                            }}
                            primary={
                              <>
                                <Typography
                                  sx={{ textTransform: "capitalize" }}>
                                  {post.designation}
                                </Typography>

                                <Typography
                                  sx={{
                                    textTransform: "capitalize",
                                    fontSize: "12px",
                                  }}>
                                  ● {post.location}
                                </Typography>

                                <Typography
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}>
                                  {post.user === user.email && (
                                    <Fragment>
                                      <IconButton
                                        color="secondary"
                                        aria-label="update data"
                                        title="Update"
                                        onClick={() =>
                                          handleShowUpdateModal(post)
                                        }>
                                        <EditNoteIcon />
                                      </IconButton>

                                      <IconButton
                                        color="warning"
                                        aria-label="delete post"
                                        title="DELETE"
                                        onClick={() =>
                                          dispatch(deleteJobPost(post._id))
                                        }>
                                        <DeleteIcon />
                                      </IconButton>
                                    </Fragment>
                                  )}

                                  <IconButton
                                    color="success"
                                    aria-label="post details"
                                    title="DETAILS"
                                    onClick={() => handleShowModal(post)}>
                                    <SendIcon />
                                  </IconButton>
                                </Typography>
                              </>
                            }
                          />
                        )
                    )}
                  </List>
                </Collapse>
              </Paper>
            ))}
          </Box>
        </Container>

        {openModal && (
          <JobModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            post={showPost}
          />
        )}

        {openUpdateModal && (
          <UpdateModal
            openModal={openUpdateModal}
            setOpenModal={setOpenUpdateModal}
            post={showPost}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Careers;
