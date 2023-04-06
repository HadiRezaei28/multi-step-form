import React from "react";

//mui
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

//component
import AddonsCard from "../cards/AddonsCard";

//data
import { pickAddons } from "../data/data";


const AddOns = ({ time, formik3 }) => {

  const setValue = (index) => {
    switch(index) {
      case 0: 
      return formik3.values.onlineService;
      case 1:
        return formik3.values.largerStorage;
      case 2:
        return formik3.values.customizeProfile;
    }
  }

  return (
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "600" }}>
        انتخاب افزونه ها
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "hsl(231, 11%, 63%)", paddingTop: "5px" }}
      >
        افزونه ها به بهبود تجربه بازی شما کمک می کنند{" "}
      </Typography>
      <Box mt={5}>
        <FormGroup>
          {pickAddons.map((addons, index) => (
            <FormControlLabel
              id={addons.value}
              name={addons.value}
              checked={setValue(index)}
              // value={setValue(index)}
              onChange={formik3.handleChange}
              key={index}
              control={<Checkbox />}
              label={<AddonsCard addons={addons} time={time} />}
              sx={{
                border: "1px solid silver",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
};

export default AddOns;
