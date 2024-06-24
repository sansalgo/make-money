import React from "react";
import Layout from "../layout";
import ProfileIcon from "../../../assets/img/profile_icon.png";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import AdImg from "../../../assets/img/ad_img.png";
import CoinIcon from "../../../assets/img/coin_icon.png";
import WithdrawalOrdersIcon from "../../../assets/img/withdrawal_orders_icon.png";
import AccountWithdrawalIcon from "../../../assets/img/account_withdrawal_icon.png";
import EarningsDetailsIcon from "../../../assets/img/earnings_details_icon.png";
import MessageCenterIcon from "../../../assets/img/message_center_icon.png";
import ChangePasswordIcon from "../../../assets/img/change_password_icon.png";
import { ReactComponent as CopyIcon } from "../../../assets/vec/copy_icon.svg";
import { ReactComponent as TranslateIcon } from "../../../assets/vec/translate_icon.svg";
import { ReactComponent as NoteIcon } from "../../../assets/vec/note_icon.svg";
import { ReactComponent as WhatsappLogoIcon } from "../../../assets/vec/whatsapp_logo_icon.svg";
import { ReactComponent as BackArrowIcon } from "../../../assets/vec/back_arrow_icon.svg";
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
import palette from "../../../theme/palette";

const ImgIconButton = styled(Button)(({ theme }) => ({
  backgroundColor: `white`,
  borderRadius: "10px",
  fontSize: "17px",
  lineHeight: "19px",
  fontWeight: "400",
  boxShadow: "none",
  color: theme.palette.primary.main,
  textAlign: "left",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    boxShadow: "none",
  },
}));

function Promotion() {
  return (
    <Layout>
      <Box padding={"0 20px"}>
        <Box pt={3} />

        <Box position={"relative"} display={"flex"}>
          <Box
            position={"absolute"}
            height={"100vh"}
            borderRadius={"26px"}
            bgcolor={"white"}
            width={"100%"}
            mt={"40px"}
            zIndex={1}
          >
            <Stack p={2}>
              <Box pt={2} />
              <Box></Box>
            </Stack>
          </Box>
          <Box
            position={"relative"}
            height={"100vh"}
            borderRadius={"26px"}
            bgcolor={"white"}
            width={"100%"}
            mt={"175px"}
            zIndex={1}
            sx={{
              background: `linear-gradient(171.95deg, ${palette.navy} 3.67%, rgba(${palette.secondary.rgb}, 0) 74.68%)`,
            }}
          >
            <Stack p={2}>
              <Box pt={2} />
              <Box></Box>
            </Stack>
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
              Promotion
            </Typography>
          </Stack>
        </Box>

        <Box pt={3} />
      </Box>
    </Layout>
  );
}

export default Promotion;
