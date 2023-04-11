import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

const Thank = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{height: "100%"}}
    >
      <Avatar alt="verified" sx={{ bgcolor: "pink", width: 70, height: 70 }}>
        <VerifiedIcon sx={{ width: "40px", height: "40px" }} />
      </Avatar>
      <Typography variant="h5" sx={{ fontWeight: 700, marginTop: "30px", fontSize: {xs: "20px", sm: "24px"} }}>
        با تشکر از شما!
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "20px", color: "hsl(229, 24%, 50%)", fontSize: {xs: "12px", sm: "16px"} }}
      >
        با تشکر از تایید مراحل اخذ اشتراک! امیدواریم استفاده از پلتفرم ما برای
        شما لذت بخش باشد. اگر زمانی نیاز به پشتیبانی داشتید لطفا به ما در
        support@lorem.com ایمیل بزنید
      </Typography>
    </Box>
  );
};

export default Thank;
