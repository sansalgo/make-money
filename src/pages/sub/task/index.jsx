import React from "react";
import Layout from "../layout";
import ProfileIcon from "../../../assets/img/profile_icon.png";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import AdImg from "../../../assets/img/ad_img.png";
import { ReactComponent as BackArrowIcon } from "../../../assets/vec/back_arrow_icon.svg";
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
  Grid,
} from "@mui/material";
import GradientButton from "../../main/components/gradientButton";
import { useNavigate } from "react-router-dom";

const Alert = styled(MuiAlert)(({ theme }) => ({
  background: `rgba(${theme.palette.secondary.rgb}, 0.5)`,
  fontSize: "12px",
  padding: "0 0.5rem",
  borderRadius: "100px",
  "& .MuiAlert-message": {
    overflow: "hidden",
    textWrap: "nowrap",
    textOverflow: "ellipsis",
    color: `${theme.palette.sapphire}`,
  },
}));

function Task() {
  const navigate = useNavigate();
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
            height={"140px"}
            width={"100%"}
            borderRadius={"10px"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            sx={{ background: `url(${CashShowerBgV1})` }}
          >
            <Stack
              onClick={() => navigate("/account")}
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
                WhatsApp Message Task
              </Typography>
            </Stack>

            <Box>
              <Grid container>
                <Grid item>
                  <Box bgcolor={"white"}>
                    <Typography variant="h6">0</Typography>
                    <Typography variant="caption">Today’s points</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box bgcolor={"white"}>
                    <Typography variant="h6">0</Typography>
                    <Typography variant="caption">
                      Yesterday’s points
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
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

export default Task;
