import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const SelectPlanCard = ({ card, time }) => {
  const { avatar, level, price, color } = card;

  return (
    <Box
      // py={2}
      // px={1}
      sx={{
        width: { xs: "75px", md: "95px" },
        border: "1px solid silver",
        borderRadius: "8px",
        py: { xs: 1, sm: 1, md: 2 },
        px: { xs: 0, sm: 1, md: 1 },
      }}
    >
      <Avatar
        alt="acrade"
        sx={{ bgcolor: color, marginBottom: { xs: 0, sm: 5 } }}
      >
        {avatar}
      </Avatar>
      <Typography
        variant="body1"
        fontWeight={700}
        sx={{
          color: "hsl(213, 96%, 18%)",
          fontSize: { xs: "12px", sm: "16px" },
        }}
      >
        {level}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "hsl(229, 24%, 50%)",
          fontSize: { xs: "12px", md: "16px" },
        }}
      >
        {price} {time ? "تومان/سال" : "تومان/ماه"}
      </Typography>
      {card.off && (
        <Typography
          variant="body2"
          fontWeight={500}
          sx={{ color: "hsl(213, 96%, 18%)",fontSize: { xs: "10px", md: "14px" } }}
        >
          {card.off}
        </Typography>
      )}
    </Box>
  );
};

export default SelectPlanCard;
