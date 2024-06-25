import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import mm_icon from "../../../assets/img/mm_icon.png";
import { ReactComponent as CustomerServiceIcon } from "../../../assets/vec/customer_service_icon.svg";
import palette from "../../../theme/palette";

function Layout({ children }) {
  return (
    <Box padding="0px 28px" fontFamily={"Inter Variable"} width={"100%"}>
      <Box paddingTop={8} />
      <Box component={"header"}>
        <img src={mm_icon} alt="mm_icon" />
        <Typography
          variant="h4"
          sx={{ fontWeight: "900", fontSize: "30px", color: "primary.main" }}
        >
          MAKE MONEY
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "400",
            fontSize: "15px",
            color: `rgba(${palette.purple_heart.rgb}, 0.5)`,
          }}
        >
          -EARNING TASK-
        </Typography>
      </Box>
      <Box paddingTop={4} />
      {children}
      <Box paddingTop={4} />
      <Box component={"footer"}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CustomerServiceIcon />
          <Typography
            textAlign={"start"}
            color="whiteGray"
            lineHeight="17px"
            letterSpacing="1px"
          >
            Online <br /> Customer Service
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Layout;
