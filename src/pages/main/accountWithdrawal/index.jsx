import React from "react";
import CashShowerBgV1 from "../../../assets/img/cash_shower_bg_v1.png";
import CoinIcon from "../../../assets/img/coin_icon.png";
import { ReactComponent as BackArrowIcon } from "../../../assets/vec/back_arrow_icon.svg";
import { ReactComponent as ListDiscIcon } from "../../../assets/vec/list_disc_icon.svg";
import Layout from "../layout";

import {
  Box,
  Divider,
  FormControlLabel,
  ListItem,
  List as MuiList,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import palette from "../../../theme/palette";
import GradientButton from "../components/gradientButton";
import { useNavigate } from "react-router-dom";

const List = styled(MuiList)(({ theme }) => ({
  fontSize: "12px",
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

function AccountWithdrawal() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box padding={"0 20px"}>
        <Box pt={3} />

        <Box
          display={"flex"}
          margin={"0 auto"}
          mb={"40px"}
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
              Account Withdrawal
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
            <Stack alignItems={"center"} spacing={2}>
              <Typography color="primary.main" variant="subtitle1">
                Withdrawable Amount 100.00
              </Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Box mr={1} display={"flex"}>
                  <img src={CoinIcon} alt="coin_icon" />
                </Box>
                <Typography fontSize={"30px"} variant="h4">
                  20.00
                </Typography>
              </Box>
            </Stack>
            <Box pt={3} />
            <GradientButton
              size="large"
              variant="contained"
              sx={{ padding: "0.5rem 3rem" }}
            >
              Withdraw Now
            </GradientButton>
          </Stack>
        </Box>

        <Box pt={3} />

        <RadioGroup name="radio-buttons-group">
          <Stack spacing={1}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={"0.5rem 1rem"}
              borderRadius={"14px"}
              bgcolor={"white"}
            >
              <Typography fontSize={"15px"} variant="subtitle1">
                Bank Card
              </Typography>
              <FormControlLabel
                sx={{ m: 0 }}
                value="bank_card"
                control={<Radio />}
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={"0.5rem 1rem"}
              borderRadius={"14px"}
              bgcolor={"white"}
            >
              <Typography fontSize={"15px"} variant="subtitle1">
                TRC
              </Typography>
              <FormControlLabel sx={{ m: 0 }} value="trc" control={<Radio />} />
            </Box>
          </Stack>
        </RadioGroup>
        <Box pt={3} />
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="subtitle1">Account</Typography>
            <GradientButton
              sx={{ padding: "0.3rem 1.3rem" }}
              variant="contained"
              size="small"
            >
              Fill in &gt;&gt;
            </GradientButton>
          </Stack>
          <Divider />
          <Box>
            <Typography variant="subtitle2">
              Account Balance : 100.00
            </Typography>
          </Box>
        </Stack>
        <Box pt={3} />
        <Box
          width={"353px"}
          height={"240px"}
          color={"white"}
          textAlign={"left"}
          p={"0.5rem 1rem"}
          sx={{
            background: `linear-gradient(171.95deg, ${palette.navy} 3.67%, rgba(102, 42, 178, 0) 74.68%)`,
            borderRadius: "20px",
          }}
        >
          <Typography variant="subtitle1">Withdrawal Instructions</Typography>
          <List>
            <ListItem>
              <Box display={"flex"} gap={1 / 2} alignItems={"start"}>
                <Box display={"flex"}>
                  <ListDiscIcon />
                </Box>
                <Typography variant="caption">
                  Minimum withdrawal amount is 2000
                </Typography>
              </Box>
            </ListItem>
            <ListItem>
              <Box display={"flex"} gap={1 / 2} alignItems={"start"}>
                <Box>
                  <ListDiscIcon />
                </Box>
                <Typography variant="caption">
                  You can only withdraw 3s times a day. Please carefully check
                  if the card number is entered correctly. If the withdrawal has
                  not been credited, please contact customer service.
                </Typography>
              </Box>
            </ListItem>
          </List>
          <Typography
            letterSpacing={"-0.337628px"}
            fontWeight={"500"}
            variant="subtitle1"
            lineHeight={"19px"}
            color={"black"}
          >
            The minimum withdrawal for new users is
            <br />
            1,000
            <br />
            1000 ≈ 5 TRX
            <br />
            1000 750 #
          </Typography>
        </Box>
        <Box pt={3} />
      </Box>
    </Layout>
  );
}

export default AccountWithdrawal;
