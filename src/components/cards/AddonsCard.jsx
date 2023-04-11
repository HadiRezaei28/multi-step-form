import { Box, Typography } from "@mui/material";
import React from "react";

const AddonsCard = ({ addons, time }) => {
  return (
    <Box
      display="felx"
      alignItems="center"
      justifyContent="space-between"
      py={1}
      sx={{  width: "100%" }}
    >
      <Box ml={1} sx={{width: "70%"}}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{ color: "hsl(213, 96%, 18%)", fontSize: {xs: "12px", sm: "16px"}}}
        >
          {addons.title}
        </Typography>
        <Typography
          variant="caption"
          fontWeight={500}
          sx={{ color: "hsl(229, 24%, 50%)", fontSize: {xs: "8px", sm: "12px"} }}
        >
          {addons.subtitle}
        </Typography>
      </Box>
      <Box sx={{width: "30%", textAlign: "center"}} >
        {time ? (
          <Typography variant="body2" sx={{ color: "hsl(229, 24%, 50%)",fontSize: {xs: "10px", sm: "14px"} }}>
            {addons.priceYear} {"تومان/سال"}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ color: "hsl(229, 24%, 50%)",fontSize: {xs: "10px", sm: "14px"} }}>
            {addons.priceMonth} {"تومان/ماه"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default AddonsCard;
