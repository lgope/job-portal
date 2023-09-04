import { useContext } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../Assets/logo/logo.png";
import { Link } from "react-router-dom";
import useStyles from "../../../styles/styles";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const classes = useStyles();
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("See You Soon! 👋🏻");
    });
  };

  return (
    <CssBaseline className="this-header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={classes.footerNav}>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo">
                <img className={classes.imgLogo} src={logo} alt="" />
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={classes.title}>
              <Link to="/">Job Portal</Link>
            </Typography>
            {user?.uid ? (
              <div>
                <Link to="/" className={classes.loginBtn}>
                  <Button color="inherit">Home</Button>
                </Link>

                <Link to="/create-post" className={classes.loginBtn}>
                  <Button color="inherit">New Post</Button>
                </Link>

                <IconButton
                  color="primary"
                  aria-label="Logout"
                  title="Logout"
                  onClick={handleLogout}>
                  <LogoutIcon />
                </IconButton>
              </div>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Link to="/login" className={classes.loginBtn}>
                  <Button
                    variant="outlined"
                    sx={{
                      px: "32px",
                      color: "white",
                      border: "1px solid white",
                      mr: 3,
                      fontWeight: 600,
                      "&:hover": {
                        border: "1px solid white",
                      },
                    }}>
                    SING IN
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="contained"
                    disableRipple="true"
                    sx={{
                      px: "32px",
                      fontWeight: 600,
                      backgroundColor: "rgb(91, 188, 46)",
                      "&:hover": {
                        backgroundColor: "rgb(91, 188, 46)",
                      },
                    }}>
                    SING UP
                  </Button>
                </Link>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </CssBaseline>
  );
};

export default Header;
