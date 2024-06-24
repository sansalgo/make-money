import { Button, styled } from "@mui/material";

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(202.17deg, ${theme.palette.navy} 8.58%, ${theme.palette.secondary.main} 91.42%);`,
  fontWeight: "400",
  fontSize: "15px",
  color: "white",
}));

export default GradientButton;
