import React from "react";

// component
import SelectPlanCard from "../cards/SelectPlanCard";

//mui component
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// data

import { cardsMonthly, cardsYearly } from "../data/data";

const BpIcon = styled("span")(({ theme }) => ({
  width: 50,
  height: 3,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "hsl(213, 96%, 18%)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "hsl(213, 96%, 18%)",
    boxSizing: "border-box",
  },
}));

const SelectPlan = ({ time, setTime, formik2 }) => {
  return (
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "600" }}>
        طرح خود را انتخاب کنید
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "hsl(231, 11%, 63%)", paddingTop: "5px" }}
      >
        شما می توانید صورتحساب سالانه یا ماهانه داشته باشید
      </Typography>
      <Grid container mt={5}>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            row
            value={formik2.values.radioValue}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {time === true
              ? cardsYearly.map((card, index) => (
                  <Grid item xs={4} key={index} sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <FormControlLabel
                      value={card.value}
                      onChange={() =>
                        formik2.setFieldValue("radioValue", `${card.value}`)
                      }
                      control={<BpRadio />}
                      label={<SelectPlanCard card={card} time={time} />}
                      labelPlacement="top"
                    />
                  </Grid>
                ))
              : cardsMonthly.map((card, index) => (
                  <Grid item xs={4} key={index} sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <FormControlLabel
                      value={card.value}
                      onChange={() =>
                        formik2.setFieldValue("radioValue", `${card.value}`)
                      }
                      control={<BpRadio />}
                      label={<SelectPlanCard card={card} time={time} />}
                      labelPlacement="top"
                    />
                  </Grid>
                ))}
            {formik2.errors.radioValue && (
              <Typography
                variant="caption"
                component="p"
                mt={2}
                sx={{ color: "hsl(354, 84%, 57%)" }}
              >
                {formik2.errors.radioValue}
              </Typography>
            )}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        sx={{
          height: "45px",
          bgcolor: "hsl(229, 24%, 92%)",
          borderRadius: "5px",
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography>ماهانه</Typography>
          <AntSwitch
            checked={time}
            inputProps={{ "aria-label": "ant design" }}
            onClick={() => setTime(!time)}
          />
          <Typography>سالانه</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SelectPlan;
