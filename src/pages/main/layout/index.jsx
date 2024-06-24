import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { ReactComponent as HomeNavIcon } from "../../../assets/vec/home_nav_icon.svg";
import { ReactComponent as CustomerServiceNavIcon } from "../../../assets/vec/customer_service_nav_icon.svg";
import { ReactComponent as PromotionNavIcon } from "../../../assets/vec/promotion_nav_icon.svg";
import { ReactComponent as AccountNavIcon } from "../../../assets/vec/account_nav_icon.svg";
import React, { useState } from "react";

function Layout({ children }) {
  const [value, setValue] = useState(0);

  return (
    <Box
      fontFamily={"Poppins"}
      sx={{ overflowY: "scroll", scrollbarWidth: "none", overflowX: "hidden" }}
      width={"100%"}
    >
      {children}
      <Box mt={"56px"} />
      <Paper
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 }}
        elevation={0}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<HomeNavIcon />} />
          <BottomNavigationAction icon={<CustomerServiceNavIcon />} />
          <BottomNavigationAction icon={<PromotionNavIcon />} />
          <BottomNavigationAction icon={<AccountNavIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default Layout;
