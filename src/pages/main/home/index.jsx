import React from "react";
import Layout from "../layout";
import ProfileIcon from "../../../assets/img/profile_icon.png";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import AdImg from "../../../assets/img/ad_img.png";
import { ReactComponent as CopyIcon } from "../../../assets/vec/copy_icon.svg";
import { ReactComponent as TranslateIcon } from "../../../assets/vec/translate_icon.svg";
import { ReactComponent as NoteIcon } from "../../../assets/vec/note_icon.svg";
import { ReactComponent as WhatsappLogoIcon } from "../../../assets/vec/whatsapp_logo_icon.svg";
import {
  Box,
  Chip,
  Divider,
  Stack,
  Typography,
  Alert as MuiAlert,
  styled,
  List,
  ListItem,
  IconButton,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import GradientButton from "../components/gradientButton";

const Alert = styled(MuiAlert)(({ theme }) => ({
  background: `rgba(${theme.palette.secondary.rgb}, 0.5)`,
  borderRadius: "100px",
  "& .MuiAlert-message": {
    overflow: "hidden",
    textWrap: "nowrap",
    textOverflow: "ellipsis",
    color: `${theme.palette.sapphire}`,
  },
}));

function Home() {
  return (
    <Layout>
      <Box padding={"0 20px"}>
        <Box pt={3} />
        <Box
          position={"relative"}
          display={"flex"}
          justifyContent={"center"}
          marginBottom={"64px"}
        >
          <Box
            display={"flex"}
            margin={"0 auto"}
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
            <Box margin={2} position={"absolute"} top={0} right={0}>
              <TranslateIcon />
            </Box>
            <Box position={"absolute"}>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img src={ProfileIcon} alt="profile_icon" />
                <Box textAlign={"left"} color={"white"}>
                  <Typography variant="h6" sx={{ fontSize: "19px" }}>
                    Himu2024
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "15px" }}>
                    Code : pxz84b &nbsp;
                    <Chip
                      label="Copy"
                      size="small"
                      sx={{ color: "white", backgroundColor: "navy" }}
                      icon={<CopyIcon color="mauve" />}
                    />
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
              padding: "1rem",
              bottom: "-64px",
            }}
          >
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={"600"}
                  color="islamic_green"
                >
                  100.00
                </Typography>
                <Typography variant="caption">Balance</Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={"600"} color="mango_tango">
                  0.00
                </Typography>
                <Typography variant="caption">Task Bonus</Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={"600"} color="secondary">
                  0.00
                </Typography>
                <Typography variant="caption">Promo Bonus</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box pt={3} />
        <Alert icon={<NoteIcon fontSize="inherit" />} severity="success">
          Note: the system will investigate, and if a gorup dissolved or memebrs
          are muted, pentalite s will be deducated penalty 500 point
        </Alert>
        <Box pt={2} />
        <img src={AdImg} alt="ad_img" />
        <Box pt={3} />
        <Box color="secondary.main">
          <Typography fontSize={"15px"} variant="subtitle1">
            Please choose task type
          </Typography>
          <List dense={true} sx={{ pt: 0 }}>
            <ListItem
              sx={{ pr: 0, pl: 0 }}
              secondaryAction={
                <GradientButton size="small" variant="contained">
                  Start Task
                </GradientButton>
              }
            >
              <ListItemAvatar>
                <WhatsappLogoIcon />
              </ListItemAvatar>
              <ListItemText primary="Whatsapp Message task" />
            </ListItem>
            <ListItem
              sx={{ pr: 0, pl: 0 }}
              secondaryAction={
                <GradientButton size="small" variant="contained">
                  Start Task
                </GradientButton>
              }
            >
              <ListItemAvatar>
                <WhatsappLogoIcon />
              </ListItemAvatar>
              <ListItemText primary="Whatsapp Message task" />
            </ListItem>
            <ListItem
              sx={{ pr: 0, pl: 0 }}
              secondaryAction={
                <GradientButton size="small" variant="contained">
                  Start Task
                </GradientButton>
              }
            >
              <ListItemAvatar>
                <WhatsappLogoIcon />
              </ListItemAvatar>
              <ListItemText primary="Whatsapp Message task" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
