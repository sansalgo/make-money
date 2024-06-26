import { Box, Container, styled } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Account from "./pages/main/account";
import Home from "./pages/main/home";
import AccountWithdrawal from "./pages/main/accountWithdrawal";
import CustomerService from "./pages/main/customerService";
import BankInfo from "./pages/sub/bankInfo";
import EaringsDetails from "./pages/sub/earingsDetails";
import WithdrawalOrders from "./pages/sub/withdrawalOrders";
import MessageCenter from "./pages/sub/messageCenter";
import ChangePassword from "./pages/sub/changePassword";
import TRCInfo from "./pages/sub/trcInfo";
import Promotion from "./pages/main/promotion";
import Task from "./pages/sub/task";

const GradientBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  background: `linear-gradient(180deg, ${theme.palette.white} 41.6%, ${theme.palette.secondary.main} 118.86%)`,
}));

function App() {
  return (
    <Box textAlign={"center"}>
      <Container maxWidth="xs" sx={{ padding: "0" }}>
        <GradientBox>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account-withdrawal" element={<AccountWithdrawal />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/bank-info" element={<BankInfo />} />
            <Route path="/earnings-details" element={<EaringsDetails />} />
            <Route path="/withdrawal-orders" element={<WithdrawalOrders />} />
            <Route path="/message-center" element={<MessageCenter />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/task" element={<Task />} />
            <Route path="/trc-info" element={<TRCInfo />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </GradientBox>
      </Container>
    </Box>
  );
}

export default App;
