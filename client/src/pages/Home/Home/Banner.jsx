import { Box, Stack, TextField, Typography, Chip } from "@mui/material";
import banner from "../../../assets/images/banner.jpg";
import SearchIcon from "@mui/icons-material/Search";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Banner = () => (
  <Box
    sx={{
      height: "400px",
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      alignItems: "center",
      textAlign: "center",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
      minHeight: "450px",
    }}>
    <Box
      sx={{
        pt: 20,
      }}>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 600,
        }}>
        WORK AT TECHFORING LIMITED
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "white",
        }}>
        Turn your passion into a career
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: "750px",
          mx: "auto",
        }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          focused
          placeholder="Search by position/department"
          sx={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: 2,
          }}
        />
        <SearchIcon
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            fontSize: "25px",
          }}
        />
      </Box>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <Chip
          className="job-opening-chip bg-white"
          label="Sofware Engineer"
          onClick={() => console.log("handleClick")}
          onDelete={() => console.log("handleDelete")}
          deleteIcon={<NotificationsActiveIcon />}
        />
        <Chip
          className="job-opening-chip bg-white"
          label="Front End Developer"
          onClick={() => console.log("handleClick")}
          onDelete={() => console.log("handleDelete")}
          deleteIcon={<NotificationsActiveIcon />}
        />
      </Stack>
    </Box>
  </Box>
);

export default Banner;
