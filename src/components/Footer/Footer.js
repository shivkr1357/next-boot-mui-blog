import styled from "@emotion/styled";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white",
    paddingTop: 20,
  });
  return (
    <footer>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "red",
          color: "white",
          height: "100%",
          padding: "30px",
        }}>
        <div className="row">
          <div className="col-lg-3">
            <SocialBox>
              <a
                className="anchorTag facebook"
                href="https://www.facebook.com/itsindianguy">
                <Facebook />
              </a>
              <a
                className="anchorTag instagram"
                href="https://www.instagram.com/itsindianguy/">
                <Instagram />
              </a>

              <a
                className="anchorTag twitter"
                href="https://twitter.com/itsindianguy/">
                <Twitter />
              </a>
              <a
                className="anchorTag quora"
                href="https://itsindianguy.quora.com/"
                style={{ fontSize: "24px" }}>
                <i className="fa-brands fa-quora"></i>
              </a>
            </SocialBox>
          </div>
          <div className="col-lg-3">
            <Stack
              flex={1}
              spacing={1}
              direction={{ xs: "row", sm: "column", md: "column" }}
              justifyContent={"center"}>
              <Box
                color={"white"}
                align={"center"}
                sx={{ cursor: "pointer" }}
                display="flex"
                onClick={() => {
                  router.push("/static-pages/PrivacyPolicy");
                  window.scrollTo(0, 0);
                }}>
                Privacy policy{" "}
                <Box
                  sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                    marginLeft: { xs: "10px", sm: "10px", md: "0px" },
                  }}>
                  |
                </Box>
              </Box>
              <Box
                color={"white"}
                align={"center"}
                sx={{ cursor: "pointer" }}
                display="flex"
                onClick={() => {
                  router.push("/static-pages/CookiesPolicy");
                  window.scrollTo(0, 0);
                }}>
                Cookies{" "}
                <Box
                  sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                    marginLeft: { xs: "10px", sm: "10px", md: "0px" },
                  }}>
                  |
                </Box>
              </Box>
              <Box
                color={"white"}
                align={"center"}
                display="flex"
                sx={{ cursor: "pointer" }}
                onClick={() => router.push("/static-pages/DataSafety")}>
                Data Safety
              </Box>
            </Stack>
          </div>
          <div className="col-lg-3">3rd part</div>
          <div className="col-lg-3">4th part</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
