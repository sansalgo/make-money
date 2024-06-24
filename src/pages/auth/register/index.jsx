import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  Button as MuiButton,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import React from "react";
import { ReactComponent as PasswordIcon } from "../../../assets/vec/password_icon.svg";
import { ReactComponent as UsernameIcon } from "../../../assets/vec/username_icon.svg";
import { ReactComponent as PromotionIcon } from "../../../assets/vec/promotion_icon.svg";
import Layout from "../layout";

const Button = styled(MuiButton)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "19px",
  lineHeight: "31px",
  textAlign: "center",
  letterSpacing: "3px",
}));

function Register() {
  return (
    <Layout>
      <Box component={"main"}>
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "7px 5px 16.5px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Stack spacing={2} divider={<Divider />} padding={2}>
            <TextField
              id="input-with-icon-textfield"
              fullWidth
              InputProps={{
                placeholder: "Please enter username",
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <UsernameIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              id="input-with-icon-textfield"
              fullWidth
              InputProps={{
                placeholder: "Please enter Password",
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              id="input-with-icon-textfield"
              fullWidth
              InputProps={{
                placeholder: "Re-enter Password",
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              id="input-with-icon-textfield"
              fullWidth
              InputProps={{
                placeholder: "Please enter promotion code",
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <PromotionIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Stack>
        </Box>
        <Box paddingTop={4} />
        <Stack spacing={2}>
          <Button variant="contained" size="large">
            REGISTER NOW
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
}

export default Register;
