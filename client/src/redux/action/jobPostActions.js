import { toast } from "react-hot-toast";
import {
  deletePost,
  postNewJob,
  setAllPost,
  setLoading,
  setPost,
  updatePost,
} from "../reducer/jobPostReducer";
import axios from "axios";

export const getJobPost = (_id) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(`http://localhost:8000/api/job/${id}`, {
      headers: {
        'Content-type': 'application/json',
        "x-auth-token": `${localStorage.getItem("job-token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        dispatch(setPost(res.data.doc));
      } else {
        toast.error("Something went wrong!");
      }
    }).catch((err) => {
      toast.error(err.message);
    })
};

export const getAllJobPost = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("http://localhost:8000/api/job/get-all-job", {
      headers: {
        "x-auth-token": `${localStorage.getItem("job-token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        dispatch(setAllPost(res.data.doc));
      } else {
        toast.error("No Data Found!");
      }
    }).catch((err) => {
      toast.error(err.message);
    });
};

export const postJob = (body) => (dispatch) => {
  dispatch(setLoading());
  axios
    .post("http://localhost:8000/api/job/post-job", body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("job-token")}`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        toast.success("Created Successfully!", {
          icon: "✅",
        });
        dispatch(postNewJob(res.data.doc));
      } else {
        toast.error("Something went wrong! Try again.");
      }
    }).catch((err) => {
      toast.error(err.message);
    });
};

export const updateJobPost = (post) => (dispatch) => {
  dispatch(setLoading());
  axios
    .patch(`http://localhost:8000/api/job/update-job/${post._id}`, post, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("job-token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success("Updated Successfully!", {
          icon: "🛠️",
        });
        dispatch(updatePost(res.data.doc));
      } else {
        toast.error("Something went wrong! Try again.");
      }
    }).catch((err) => {
      toast.error(err.message);
    });
};

export const deleteJobPost = (_id) => (dispatch) => {
  if (confirm("Are you sure you want to delete?")) {
    dispatch(setLoading());
    axios
      .delete(`http://localhost:8000/api/job/delete-job/${_id}`, {
        headers: {
          "x-auth-token": `${localStorage.getItem("job-token")}`,
        },
      })
      .then((res) => {
        if (res.status === 204) {
          toast.success("Deleted successfully", {
            icon: "🚮",
          });
          dispatch(deletePost(_id));
        }
      }).catch((err) => {
        toast.error(err.message);
      });
  }
};
