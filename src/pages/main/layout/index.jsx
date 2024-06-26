import {
  BottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  Box,
  Paper,
  styled,
} from "@mui/material";
import { ReactComponent as HomeNavIcon } from "../../../assets/vec/home_nav_icon.svg";
import { ReactComponent as CustomerServiceNavIcon } from "../../../assets/vec/customer_service_nav_icon.svg";
import { ReactComponent as PromotionNavIcon } from "../../../assets/vec/promotion_nav_icon.svg";
import { ReactComponent as AccountNavIcon } from "../../../assets/vec/account_nav_icon.svg";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const NAV = ["/", "/customer-service", "/promotion", "/account"];

const BottomNavigationAction = styled(MuiBottomNavigationAction)(
  ({ theme }) => ({
    "&.Mui-selected": {
      color: "white",
      "& svg": {
        background: theme.palette.primary.gradient,
        borderRadius: "6px",
      },
    },
  })
);

function Layout({ children }) {
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
        <BottomNavigation value={useLocation().pathname}>
          <BottomNavigationAction
            disableRipple
            component={Link}
            value={NAV[0]}
            to={NAV[0]}
            icon={<HomeNavIcon />}
          />
          <BottomNavigationAction
            disableRipple
            component={Link}
            value={NAV[1]}
            to={NAV[1]}
            icon={<CustomerServiceNavIcon />}
          />
          <BottomNavigationAction
            disableRipple
            component={Link}
            value={NAV[2]}
            to={NAV[2]}
            icon={<PromotionNavIcon />}
          />
          <BottomNavigationAction
            disableRipple
            component={Link}
            value={NAV[3]}
            to={NAV[3]}
            icon={<AccountNavIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default Layout;
