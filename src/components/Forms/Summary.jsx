import React from "react";
import { Box, Typography } from "@mui/material";

const Summary = () => {
  return (
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "600" }}>
        مرحله نهایی
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "hsl(231, 11%, 63%)", paddingTop: "5px" }}
      >
        قبل از تایید نهائی موارد را دوباره چک کنید
      </Typography>
      <Box
        mt={5}
        sx={{
          bgcolor: "hsl(229, 24%, 92%)",
          borderRadius: "5px",
        }}
      >
        سشیشسب
      </Box>
    </Box>
  );
};

export default Summary;
