import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import GamesRoundedIcon from "@mui/icons-material/GamesRounded";

const Card1 = ({ card }) => {
  const { avatar, level, price, color } = card;

  return (
    <Box
      py={2}
      pr={5}
      pl={2}
      sx={{width: "80px",border: "1px solid silver", borderRadius: "8px" }}
    >
      <Avatar alt="acrade" sx={{ bgcolor: color, marginBottom: 5 }}>
        {avatar}
      </Avatar>
      <Typography variant="body1" fontWeight={700} sx={{color: "hsl(213, 96%, 18%)"}}>
        {level}
      </Typography>
      <Typography variant="body2" sx={{color: "hsl(229, 24%, 50%)"}}>
        {price} تومان/ماه
      </Typography>
      {card.off && (
        <Typography variant="body2" fontWeight={500} sx={{color: "hsl(213, 96%, 18%)"}}>
          {card.off}
        </Typography>
      )}
    </Box>
  );
};

export default Card1;
