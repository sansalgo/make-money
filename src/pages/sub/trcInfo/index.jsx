import {
  Box,
  Divider,
  Grid,
  Tabs as MuiTabs,
  Stack,
  Tab,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
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

function TRCInfo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box padding={"0 20px"}>
        <Box pt={3} />

        <Box>
          <Box
            display={"flex"}
            margin={"0 auto"}
            mb={"135px"}
            width={"fit-content"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
          >
            <img
              src={CashShowerBgV1}
              alt="cash_shower_bg_v1"
              style={{ borderRadius: "10px" }}
            />
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
                Personal Center
              </Typography>
            </Stack>
            <Stack
              top={"40px"}
              borderRadius={"26px"}
              position={"absolute"}
              bgcolor={"white"}
              width={"100%"}
              p={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Account Information" {...a11yProps(0)} />
                  <Tab label="Payment Information" {...a11yProps(0)} />
                </Tabs>
              </Box>
              <Box pt={2} />
              <Box>
                <TabPanel value={value} index={0}>
                  <Box
                    sx={{
                      background: `rgba(${palette.secondary.rgb}, 0.05)`,
                      borderRadius: "10px",
                    }}
                    padding={2}
                    fontFamily={"Inter Variable"}
                  >
                    <Stack spacing={1} divider={<Divider />}>
                      <Grid container spacing={0}>
                        <Grid padding={0} item xs={6}>
                          <Typography
                            textAlign={"left"}
                            color={"rgba(0, 0, 0, 0.27)"}
                            variant="subtitle1"
                            fontSize={"15px"}
                          >
                            User Name
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            size="small"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Typography
                            textAlign={"left"}
                            color={"rgba(0, 0, 0, 0.27)"}
                            variant="subtitle1"
                            fontSize={"15px"}
                          >
                            Superior Account
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            size="small"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Typography
                            textAlign={"left"}
                            color={"rgba(0, 0, 0, 0.27)"}
                            variant="subtitle1"
                            fontSize={"15px"}
                          >
                            Code
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            size="small"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography
                    color="primary.main"
                    fontFamily={"Inter Variable"}
                    variant="subtitle1"
                    fontSize={"15px"}
                  >
                    TRC 20
                  </Typography>
                  <Box pt={1} />
                  <Box
                    sx={{
                      background: `rgba(${palette.secondary.rgb}, 0.05)`,
                      borderRadius: "10px",
                    }}
                    padding={2}
                    fontFamily={"Inter Variable"}
                  >
                    <Stack spacing={1} divider={<Divider />}>
                      <Grid container spacing={0}>
                        <Grid padding={0} item xs={6}>
                          <Typography
                            textAlign={"left"}
                            color={"rgba(0, 0, 0, 0.27)"}
                            variant="subtitle1"
                            fontSize={"15px"}
                          >
                            TRC
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            size="small"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Typography
                            textAlign={"left"}
                            color={"rgba(0, 0, 0, 0.27)"}
                            variant="subtitle1"
                            fontSize={"15px"}
                          >
                            Login Password
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            size="small"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Box>
                </TabPanel>
              </Box>
              <Box pt={2} />
              <GradientButton
                size="large"
                variant="contained"
                fullWidth
                sx={{
                  padding: "0.5rem 3rem",
                  fontSize: "19px",
                  lineHeight: "31px",
                  letterSpacing: "3px",
                  fontFamily: "Inter Variable",
                }}
              >
                Confirm
              </GradientButton>
            </Stack>
          </Box>
        </Box>

        <Box pt={3} />
      </Box>
    </Layout>
  );
}

export default TRCInfo;
