import {
  Box,
  Divider,
  Grid,
  Tabs as MuiTabs,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import MsgBellIcon from "../../../assets/img/msg_bell_icon.png";
import { ReactComponent as BackArrowIcon } from "../../../assets/vec/back_arrow_icon.svg";
import palette from "../../../theme/palette";
import GradientButton from "../../main/components/gradientButton";
import Layout from "../layout";

const Tabs = styled(MuiTabs)(({ theme }) => ({
  minHeight: 0,
  justifyContent: "center",
  "& .MuiButtonBase-root.MuiTab-root": {
    fontSize: "14px",
    fontWeight: "400",
    minHeight: 0,
    padding: "0.5rem",
    color: theme.palette.nobel,
  },
  ".MuiButtonBase-root.MuiTab-root.Mui-selected": {
    color: "white",
    background: `linear-gradient(202.17deg, ${theme.palette.navy} 8.58%, ${theme.palette.secondary.main} 91.42%)`,
    borderRadius: "100px",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gainsboro,
  fontSize: "12px",
  color: theme.palette.primary,
  padding: "0.8rem 0",
  textAlign: "center",
  borderRadius: "30px",
  "&.active": {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

function MessageCenter() {
  const [value, setValue] = useState(NaN);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box padding={"0 20px"}>
        <Box pt={3} />

        <Box position={"relative"} display={"flex"}>
          <Box
            position={"relative"}
            height={"100vh"}
            borderRadius={"26px"}
            bgcolor={"white"}
            width={"100%"}
            mt={"40px"}
            zIndex={1}
          >
            <Stack p={2}>
              <Box>
                <Tabs
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="System Announcement (0)" {...a11yProps(0)} />
                  <Tab label="In-Site Messages (0)" {...a11yProps(0)} />
                </Tabs>
              </Box>
              <Box pt={2} />
              <Box>
                <TabPanel value={value} index={0}>
                  <Box>
                    <Box
                      display={"flex"}
                      px={1}
                      bgcolor="magnolia"
                      borderRadius={"14px"}
                    >
                      <Box>
                        <img src={MsgBellIcon} alt="msg_bell_icon" />
                      </Box>
                      <Stack>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography variant="caption">Kind Tips</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption" fontSize={"8px"}>
                              2024-05-22 22 41:59
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography
                          textAlign={"left"}
                          variant="caption"
                          fontSize={"6px"}
                        >
                          Explore demi fonts at MyFonts. Discover a world of
                          captivating typography for your creative projects.
                          Unleash your design potential today!
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Box></Box>
                </TabPanel>
              </Box>
            </Stack>

            <Box
              component={"div"}
              position={"absolute"}
              width={"100%"}
              bottom={0}
              pb={2}
              fontSize={"14px"}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item>
                  <GradientButton variant="contained" size="small">
                    &lt;&nbsp;Previous Page
                  </GradientButton>
                </Grid>
                <Grid item>Next Page&nbsp;&gt;</Grid>
              </Grid>
            </Box>
          </Box>
          <Box position={"absolute"} top={0}>
            <img
              src={CashShowerBgV1}
              alt="cash_shower_bg_v1"
              style={{ borderRadius: "10px" }}
            />
          </Box>
          <Stack
            margin={1}
            direction={"row"}
            spacing={1}
            top={0}
            left={0}
            position={"absolute"}
          >
            <BackArrowIcon />
            <Typography color={"white"} variant="subtitle1">
              Message Center
            </Typography>
          </Stack>
        </Box>

        <Box pt={3} />
      </Box>
    </Layout>
  );
}

export default MessageCenter;
