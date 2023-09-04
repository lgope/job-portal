import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  imgLogo: {
    width: "50px",
    height: "50px",
  },
  loginBtn: {
    color: "white",
    textDecoration: "none",
  },

  navLogo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    height: "fit-content",
    backgroundColor: "#182f59",
    color: "white",
    textAlign: "center",
    padding: "30px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.40)",
    "& img": {
      width: "50px",
      height: "50px",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },

  rights: {
    marginTop: "5px",
    fontSize: "14px !important",
  },

  signupTxt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      color: "#1976D2",
      textDecoration: "none",
    },
  },

  MakePost: {
    padding: "40px",
  },
  MakePostCard: {
    padding: "50px",
  },

  viewPostCard: {
    marginBottom: "30px",
  },

  jobPost: {
    padding: "40px",
  },

  singlePost: {
    padding: "30px",
  },

  desc: {
    marginLeft: "30px",
    padding: "10px",
  },

  viewBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },

  homeDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  homeImg: {
    width: "40%",
  },

  errorImg: {
    width: "40%",
    padding: "10px",
  },

  error: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
