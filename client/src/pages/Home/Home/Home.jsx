import { Fragment } from "react";
import Careers from "../ViewPost/Careers";
import homeImg from "../../../Assets/images/home.svg";
import useStyles from "../../../styles/styles";
import Banner from "./Banner";
import { Box } from "@mui/material";
import PostHeading from "./PostHeading";

const Home = () => {
  const classes = useStyles();

  return (
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
      {/* <div className={classes.homeDiv}>
        <img className={classes.homeImg} src={homeImg} alt="" />
      </div> */}
      <Careers />
    </Fragment>
  );
};

export default Home;
