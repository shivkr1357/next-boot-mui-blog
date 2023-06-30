import { Typography } from "@mui/material";
import React from "react";
import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";
import FooterPart3 from "./FooterPart3";

const Footer = () => {
  return (
    <footer style={{ width: "100%", marginBottom: "0px" }}>
      <div
        className="container-fluid"
        style={{
          backgroundImage: "linear-gradient(to right, #face34, #324134)",
          color: "white",
          height: "100%",
          padding: "30px",
        }}
      >
        <div className="row p-2 m-2 justify-content-center align-item-center">
          <div className="col-lg-3 mb-3 d-flex justify-content-center">
            <FooterPart1 />
          </div>
          <div className="col-lg-3 mb-3 d-flex justify-content-center">
            <FooterPart2 />
          </div>
          <div className="col-lg-3 mb-3 d-flex justify-content-center">
            <FooterPart3 />
          </div>
          <div className="col-lg-3 mb-3 d-flex justify-content-center">
            <FooterPart1 />
          </div>
        </div>
        <Typography color={"white"} align={"center"}>
          Copyright &copy; {new Date().getFullYear()} {" itsindianguy.in"}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
