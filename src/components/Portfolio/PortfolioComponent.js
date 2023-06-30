import { Box, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";

const PortfolioComponent = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <Image
          width={400}
          height={400}
          src="/assets/profile/profile_pic.jpg"
          alt="Developer Profile Image"
          style={{ objectFit: "cover", borderRadius: "20px" }}
        />
      </Box>
      <Box>
        <Typography variant="h2" sx={{ fontSize: "20px" }} align="center">
          About the author and the Developer of this Webapp
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" fontSize={20} align="center" p={2}>
          Shiv Shankar Prasad
        </Typography>
        <Typography variant="h4" fontSize={16} align="center" p={2}>
          Experiances : Associate Technology &#44; Level 1 &#44; Zapbuild
          Technologies, Mohali &#44; Date : 13-Feb-2020 to 16-Feb-2021
        </Typography>
        <Typography variant="h4" fontSize={16} align="center" p={2}>
          Experiances : System Engineer &#44; Tata Consultancy Services LTD.
          Noida &#44; Date : 18-Feb-2021 to 20-March-2023
        </Typography>
        <Typography variant="h4" fontSize={16} align="center" p={2}>
          Experiances : MERN Stack Developer &#44; Mechlin Services Private LTD.
          Noida &#44; Date : 18-Feb-2021 to 20-March-2023
        </Typography>
        &nbsp; &nbsp; &nbsp; &nbsp;
        {/* <Typography variant="a"></Typography> */}
        {/* <Typography variant="h4" fontSize={20} align={"center"}>
          Contact
        </Typography> */}
      </Box>
    </Stack>
  );
};

export default PortfolioComponent;
