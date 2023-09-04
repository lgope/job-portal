import { useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import HowToRegIcon from "@mui/icons-material/HowToReg";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useStyles from "../../styles/styles";
import { AuthContext } from "../../contexts/AuthProvider";

const theme = createTheme();

const SingUp = () => {
  const classes = useStyles();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    createUser(data.get("email"), data.get("password"))
      .then((result) => {
        const user = result.user;
        if (user) {
          toast("User Created Successfully");
        }
        navigate("/", { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <HowToRegIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Correct Horse Battery Staple"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<HowToRegSharpIcon />}>
              Sign Up
            </Button>
            <Grid container className={classes.signupTxt}>
              <Grid item>
                <Link to="/login" variant="body2">
                  <p>Have an account? Sign In</p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SingUp;
