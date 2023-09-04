import { Fragment } from "react";
import Careers from "../ViewPost/Careers";
import Banner from "./Banner";
import { Box } from "@mui/material";
import PostHeading from "./PostHeading";

const Home = () => (
  <Fragment>
    <Banner />
    <Box
      sx={{
        mx: "auto",
        my: 3,
        width: "50px",
        height: "5px",
        backgroundColor: "#16FF00",
      }}></Box>
    <PostHeading />
    <Careers />
  </Fragment>
);

export default Home;
