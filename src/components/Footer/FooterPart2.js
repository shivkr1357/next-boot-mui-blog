import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const FooterPart2 = () => {
  const router = useRouter();
  return (
    <div>
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
  );
};

export default FooterPart2;
