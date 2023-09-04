import PropTypes from "prop-types";
import { Box, Button, Typography, Modal } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95vw", md: "80vw" },
  height: { xs: "95vh", md: "80vh" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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

const JobModal = ({ openModal, setOpenModal, post }) => {
  const {
    designation,
    company,
    description,
    responsibilities,
    requirements,
    benefits,
    timing,
    qualifications,
    // location,
    // department,
    vacancy,
    type,
    address,
    salary,
  } = post;
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          component="div"
          sx={{ display: "flex", alignItems: "center", height: "15%" }}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            sx={{ pr: 4, borderRight: "1px solid darkgray", mr: 2 }}>
            {designation}
          </Typography>
          <Typography id="modal-modal-title" variant="p" sx={{ pr: 4, mr: 2 }}>
            {company}
          </Typography>
        </Typography>
        <Box sx={{ height: "70%", overflowY: "scroll", mb: "18px" }}>
          <Typography id="modal-modal-title" component="div" sx={{ mb: 5 }}>
            <Typography id="modal-modal-title" variant="h5" sx={{ mb: 1 }}>
              Description:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="p"
              sx={{ width: "fit-content" }}>
              {description}
            </Typography>
          </Typography>

          <Typography id="modal-modal-title" component="div" sx={{ mb: 5 }}>
            <Typography id="modal-modal-title" variant="h5" sx={{ mb: 1 }}>
              Qualifications:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="p"
              sx={{ width: "fit-content" }}>
              {qualifications}
            </Typography>
          </Typography>

          <Typography id="modal-modal-title" component="div" sx={{ mb: 5 }}>
            <Typography id="modal-modal-title" variant="h5" sx={{ mb: 1 }}>
              Requirements:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="p"
              sx={{ width: "fit-content" }}>
              {requirements}
            </Typography>
          </Typography>

          <Typography id="modal-modal-title" component="div" sx={{ mb: 5 }}>
            <Typography id="modal-modal-title" variant="h5" sx={{ mb: 1 }}>
              Responsibilities:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="p"
              sx={{ width: "fit-content" }}>
              {responsibilities}
            </Typography>
          </Typography>
          <Typography id="modal-modal-title" component="div" sx={{ mb: 5 }}>
            <Typography id="modal-modal-title" variant="h5" sx={{ mb: 1 }}>
              Benefits:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="p"
              sx={{ width: "fit-content" }}>
              {benefits}
            </Typography>
          </Typography>
          <Typography
            component="div"
            sx={{ mb: 5, textTransform: "capitalize" }}>
            <Typography id="modal-modal-title" variant="h6" sx={{ mb: 1 }}>
              Other Information:
            </Typography>

            <Typography id="modal-modal-title" component="div">
              Vacancy: {vacancy}
            </Typography>

            <Typography id="modal-modal-title" component="div">
              Type: {type}
            </Typography>

            <Typography id="modal-modal-title" component="div">
              Salary: {salary}
            </Typography>
            <Typography id="modal-modal-title" component="div">
              Timing – {timing}
            </Typography>

            <Typography id="modal-modal-title" component="div">
              Address: {address}
            </Typography>
            {/* 
            <Typography id="modal-modal-title" component="div">
              Location: {location}
            </Typography> */}
          </Typography>
        </Box>
        <Button
          sx={{ padding: "8px 30px", fontSize: "14px", mt: "auto" }}
          variant="contained"
          color="success">
          APPLY NOW
        </Button>
        <CancelOutlinedIcon
          sx={crossStyle}
          onClick={() => setOpenModal(false)}
        />
      </Box>
    </Modal>
  );
};

JobModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  post: PropTypes.object,
};

export default JobModal;
