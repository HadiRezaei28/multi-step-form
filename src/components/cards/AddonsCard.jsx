import { Box, Typography } from "@mui/material";
import React from "react";

const AddonsCard = ({ addons, time }) => {
  return (
    <Box
      display="felx"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "32vw", height: "65px" }}
    >
      <Box ml={1} sx={{width: "60%"}}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{ color: "hsl(213, 96%, 18%)"}}
        >
          {addons.title}
        </Typography>
        <Typography
          variant="caption"
          fontWeight={500}
          sx={{ color: "hsl(229, 24%, 50%)" }}
        >
          {addons.subtitle}
        </Typography>
      </Box>
      <Box sx={{width: "40%", textAlign: "end"}} >
        {time ? (
          <Typography variant="body2" sx={{ color: "hsl(229, 24%, 50%)", paddingRight: "10px" }}>
            {addons.priceYear} {"تومان/سال"}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ color: "hsl(229, 24%, 50%)", paddingRight: "10px" }}>
            {addons.priceMonth} {"تومان/ماه"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default AddonsCard;
