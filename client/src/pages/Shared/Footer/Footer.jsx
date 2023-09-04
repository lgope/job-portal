import useStyles from "../../../styles/styles";
import { CssBaseline } from "@mui/material";
import logo from "../../../Assets/logo/logo.png";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <div className={classes.footer}>
        <div className={classes.navLogo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Typography variant="h6">
            <Link to="/">Job Portal</Link>
          </Typography>
        </div>
        <Typography className={classes.rights}>
          All Rights Reserved &copy; {new Date().getFullYear()}
        </Typography>
      </div>
    </CssBaseline>
  );
};

export default Footer;
