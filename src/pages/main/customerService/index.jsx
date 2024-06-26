import React, { useState } from "react";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import HelpChatIcon from "../../../assets/img/help_chat_icon.png";
import RewardModel from "../../../assets/img/reward_model.png";
import { ReactComponent as BackArrowIcon } from "../../../assets/vec/back_arrow_icon.svg";
import { ReactComponent as PlayBtnIcon } from "../../../assets/vec/play_btn_icon.svg";
import { ReactComponent as RArrowIcon } from "../../../assets/vec/r_arrow_icon.svg";
import Layout from "../layout";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Container,
  List as MuiList,
  Stack,
  Typography,
  Button,
  styled,
} from "@mui/material";

import GradientButton from "../components/gradientButton";
import { useNavigate } from "react-router-dom";

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

const helpContent = {
  "Limited time event": {
    title: "Limited time event",
    content: "",
    img: RewardModel, // Replace with the actual image if different
  },
  "Commission Note": {
    title: "Commission Note",
    content:
      "*after creating task group on WhatsApp, it can be reused deleting it means deleting it means on commission. ",
    img: "", // Replace with the actual image if different
  },
};

function CustomerService() {
  const [open, setOpen] = useState(false);
  const [currentHelp, setCurrentHelp] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (helpKey) => {
    setCurrentHelp(helpContent[helpKey]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentHelp(null);
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
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
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
            {Object.keys(helpContent).map((key) => (
              <Box
                key={key}
                bgcolor={"white"}
                padding={1 / 2}
                pl={2}
                alignItems={"center"}
                borderRadius={"20px"}
                display={"flex"}
                justifyContent={"space-between"}
                onClick={() => handleOpen(key)}
                sx={{ cursor: "pointer" }}
              >
                <Typography variant="subtitle1">{key}</Typography>
                <GradientButton
                  sx={{ py: "0.6rem", px: "1rem" }}
                  variant="contained"
                  size="large"
                >
                  <RArrowIcon />
                </GradientButton>
              </Box>
            ))}
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

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: "300px",
            borderRadius: "20px",
            fontFamily: "Poppins",
            color: "secondary.main",
          },
        }}
        fullWidth
      >
        {currentHelp && (
          <Container maxWidth="xs" sx={{ padding: "0" }}>
            <DialogTitle>{currentHelp.title}</DialogTitle>
            <DialogContent>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                {currentHelp.content}
              </Typography>
              <Box pt={2} />
              {currentHelp.img && (
                <img
                  src={currentHelp.img}
                  alt={currentHelp.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              )}
              <Box pt={2} />
              <Box display="flex" justifyContent="center" mt={2}>
                <GradientButton
                  onClick={handleClose}
                  sx={{ py: "0.6rem", px: "1rem", width: "100px" }}
                  variant="contained"
                  size="large"
                >
                  Close
                </GradientButton>
              </Box>
            </DialogContent>
          </Container>
        )}
      </Dialog>
    </Layout>
  );
}

export default CustomerService;
