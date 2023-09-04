import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #000",
  borderRadius: 0,
}));

const PostHeading = () => (
  <Fragment>
    <Typography
      variant="h4"
      sx={{
        fontWeight: "600",
        textAlign: "center",
      }}>
      BROWSE OPEN POSITIONS
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: "400",
        mb: 4,
        textAlign: "center",
      }}>
      We are looking for talented people to contribute and grow the community
    </Typography>
    <Stack direction="row" justifyContent="center">
      <Item sx={{ backgroundColor: "#000", color: "white" }}>
        All Locations
      </Item>
      <Item>
        Bangladesh{" "}
        <img
          width={20}
          height={15}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
          alt=""
        />{" "}
      </Item>
      <Item>
        India{" "}
        <img
          width={20}
          height={15}
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt=""
        />
      </Item>
    </Stack>
  </Fragment>
);

export default PostHeading;
