import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export const signIn = (body) => {
  //get token
  axios
    .post("https://job-portal-lgope.onrender.com/api/auth/jwt", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status !== 401 || res.status !== 403) {
        localStorage.setItem("job-token", data.token);
        navigate("/", { replace: true });
      } else {
        toast.error("This didn't work.");
      }
    });
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
