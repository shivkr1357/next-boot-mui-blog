import React from "react";
import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

function Layout({ children }) {
  return (
    <Fragment>
      <Topbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
