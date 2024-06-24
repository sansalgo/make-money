import { Box } from "@mui/material";
import React, { useState } from "react";

function Layout({ children }) {
  const [value, setValue] = useState(0);

  return (
    <Box
      fontFamily={"Poppins"}
      sx={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}

export default Layout;
