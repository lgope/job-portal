import PropTypes from "prop-types";
import { Box, Button, Typography, Modal } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { capitalizeFirstLetter } from "../../utils";
import moment from "moment/moment";

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
    applyLastDate,
    createdAt,
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
            sx={{
              pr: 4,
              borderRight: "1px solid darkgray",
              mr: 2,
            }}>
            {designation}
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="p"
            sx={{ pr: 4, mr: 2, borderRight: "1px solid darkgray" }}>
            {company}
          </Typography>

          <Typography
            id="modal-modal-title"
            component="span"
            sx={{
              width: "fit-content",
              fontSize: "12px",
              color: "cadetblue",
            }}>
            Posted: {moment(createdAt).fromNow()}
          </Typography>
        </Typography>

        <Box sx={{ height: "70%", overflowY: "scroll", mb: "18px" }}>
          {[
            { description },
            { qualifications },
            { requirements },
            { responsibilities },
            { benefits },
          ].map((obj, index) => (
            <Typography
              id="modal-modal-title"
              component="div"
              sx={{ mb: 5 }}
              key={index}>
              <Typography id="modal-modal-title" variant="h5" sx={{ mb: 1 }}>
                {capitalizeFirstLetter(Object.keys(obj)[0])} :
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="p"
                sx={{ width: "fit-content" }}>
                {Object.values(obj)[0]}
              </Typography>
            </Typography>
          ))}

          <Typography
            component="div"
            sx={{ mb: 5, textTransform: "capitalize" }}>
            <Typography id="modal-modal-title" variant="h6" sx={{ mb: 1 }}>
              Other Information:
            </Typography>

            {[{ vacancy }, { type }, { salary }, { timing }, { address }].map(
              (obj, index) => (
                <Typography id="modal-modal-title" component="div" key={index}>
                  {capitalizeFirstLetter(Object.keys(obj)[0])} :{" "}
                  {Object.values(obj)[0]}
                </Typography>
              )
            )}

            <Typography id="modal-modal-title" component="div">
              Apply Last Date : {moment(applyLastDate).format("Do MMM YYYY")}
            </Typography>
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
