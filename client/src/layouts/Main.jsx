import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => (
  <Fragment>
    <Header />
    <Outlet></Outlet>
    <Footer />
  </Fragment>
);

export default Main;
