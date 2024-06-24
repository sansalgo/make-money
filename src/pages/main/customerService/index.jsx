import React from "react";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import HelpChatIcon from "../../../assets/img/help_chat_icon.png";
import { ReactComponent as BackArrowIcon } from "../../../assets/vec/back_arrow_icon.svg";
import { ReactComponent as ListDiscIcon } from "../../../assets/vec/list_disc_icon.svg";
import { ReactComponent as PlayBtnIcon } from "../../../assets/vec/play_btn_icon.svg";
import { ReactComponent as RArrowIcon } from "../../../assets/vec/r_arrow_icon.svg";
import Layout from "../layout";

import {
  Box,
  Divider,
  FormControlLabel,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List as MuiList,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import palette from "../../../theme/palette";
import GradientButton from "../components/gradientButton";

const List = styled(MuiList)(({ theme }) => ({
  "& .MuiListItem-root": {
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "white",
    borderRadius: "20px",
  },

  "& .MuiTypography-root": {
    fontSize: "16px",
  },
  "& .MuiListItemSecondaryAction-root": {
    right: 0,
    "& .MuiButtonBase-root": {
      padding: "0.6rem 1rem",
    },
  },
}));

function CustomerService() {
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
                Customer Service
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
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.15)"}
            >
              <img src={HelpChatIcon} alt="help_chat_icon" />
              <Box pt={2} />
              <Typography
                color="primary"
                lineHeight={"19px"}
                fontWeight={"700"}
                variant="subtitle1"
              >
                Got a problem find <br />
                Customer service
              </Typography>
              <Box pt={2} />
              <GradientButton
                size="large"
                variant="contained"
                sx={{ padding: "0.5rem 3rem" }}
              >
                Consult now
              </GradientButton>
            </Stack>
          </Box>
        </Box>

        <Box pt={3} />

        <Box color="secondary.main">
          <Typography mb={1} variant="subtitle1">
            Help Documentation
          </Typography>
          <Stack spacing={1 / 2}>
            <Box
              bgcolor={"white"}
              padding={1 / 2}
              pl={2}
              alignItems={"center"}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1">Limited time event</Typography>
              <GradientButton
                sx={{ py: "0.6rem", px: "1rem" }}
                variant="contained"
                size="large"
              >
                <RArrowIcon />
              </GradientButton>
            </Box>
            <Box
              bgcolor={"white"}
              padding={1 / 2}
              pl={2}
              alignItems={"center"}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1">Commission Note</Typography>
              <GradientButton
                sx={{ py: "0.6rem", px: "1rem" }}
                variant="contained"
                size="large"
              >
                <RArrowIcon />
              </GradientButton>
            </Box>
            <Box
              bgcolor={"white"}
              padding={1 / 2}
              pl={2}
              alignItems={"center"}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1">Task</Typography>
              <GradientButton
                sx={{ py: "0.6rem", px: "1rem" }}
                variant="contained"
                size="large"
              >
                <RArrowIcon />
              </GradientButton>
            </Box>
            <Box
              bgcolor={"white"}
              padding={1 / 2}
              pl={2}
              alignItems={"center"}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1">Instructional video</Typography>
              <GradientButton
                sx={{ py: "0.6rem", px: "1rem" }}
                variant="contained"
                size="large"
              >
                <RArrowIcon />
              </GradientButton>
            </Box>
          </Stack>
        </Box>
        <Box pt={3} />
        <Box
          display={"flex"}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"10px"}
          width={"338px"}
          height={"168px"}
          bgcolor="navy"
        >
          <PlayBtnIcon />
        </Box>
        <Box pt={3} />
      </Box>
    </Layout>
  );
}

export default CustomerService;
