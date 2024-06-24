import React from "react";
import Layout from "../layout";
import ProfileIcon from "../../../assets/img/profile_icon.png";
import CashShowerBgV2 from "../../../assets/img/cash_shower_bg_v2.png";
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

function Account() {
  return (
    <Layout>
      <Box padding={"0 20px"}>
        <Box pt={3} />
        <Box
          display={"flex"}
          margin={"0 auto"}
          width={"fit-content"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <img
            src={CashShowerBgV2}
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
            <Box pt={1} />
            <Box
              pt={4}
              display={"flex"}
              justifyContent={"center"}
              position={"relative"}
              width={"333px"}
              height={"164px"}
              bgcolor={"white"}
              borderRadius={"12px 12px 14px 14px"}
            >
              <Box display={"flex"}>
                <Box mr={1}>
                  <img src={CoinIcon} alt="coin_icon" />
                </Box>
                <Box textAlign={"left"}>
                  <Typography
                    lineHeight={"14px"}
                    color={"red"}
                    variant="h4"
                    fontSize={"30px"}
                  >
                    100.00
                  </Typography>
                  <Typography color="dark_violet" variant="caption">
                    Account Balance
                  </Typography>
                </Box>
              </Box>
              <Box
                width={"100%"}
                height={"80px"}
                bottom={0}
                borderRadius={"40px 40px 12px 12px"}
                sx={{
                  position: "absolute",
                  background: `linear-gradient(195.11deg, ${palette.navy} 8.43%, ${palette.secondary.main} 92.98%)`,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  padding={"1.5rem 2rem"}
                >
                  <Box>
                    <Typography
                      lineHeight={"17px"}
                      color="medium_slate_blue"
                      variant="h6"
                    >
                      100.00
                    </Typography>
                    <Typography color={"white"} variant="caption">
                      Today’s Task
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      lineHeight={"17px"}
                      color="medium_slate_blue"
                      variant="h6"
                    >
                      100.00
                    </Typography>
                    <Typography color={"white"} variant="caption">
                      Todays Promotion
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box pt={3} />
        <Box>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <ImgIconButton
                variant="contained"
                startIcon={
                  <img
                    src={AccountWithdrawalIcon}
                    alt="account_withdrawal_icon"
                  />
                }
              >
                Account <br /> Withdrawal
              </ImgIconButton>

              <ImgIconButton
                variant="contained"
                startIcon={
                  <img src={EarningsDetailsIcon} alt="earnings_details_icon" />
                }
              >
                Account <br /> Withdrawal
              </ImgIconButton>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <ImgIconButton
                variant="contained"
                startIcon={
                  <img
                    src={WithdrawalOrdersIcon}
                    alt="withdrawal_orders_icon"
                  />
                }
              >
                Account <br /> Withdrawal
              </ImgIconButton>
              <ImgIconButton
                variant="contained"
                startIcon={
                  <img src={MessageCenterIcon} alt="message_center_icon" />
                }
              >
                Account <br /> Withdrawal
              </ImgIconButton>
            </Stack>
            <Box>
              <ImgIconButton
                variant="contained"
                startIcon={
                  <img src={ChangePasswordIcon} alt="change_password_icon" />
                }
              >
                Account <br /> Withdrawal
              </ImgIconButton>
            </Box>
          </Stack>
        </Box>
        <Box pt={3} />
        <GradientButton
          size="large"
          sx={{ fontSize: "18px", fontWeight: "700", padding: "0.5rem 3rem" }}
        >
          Log Out
        </GradientButton>
      </Box>
    </Layout>
  );
}

export default Account;
