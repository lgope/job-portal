import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import { Toaster } from "react-hot-toast";

const App = () => (
  <Fragment>
    <RouterProvider router={router} />
    <Toaster />
  </Fragment>
);

export default App;
