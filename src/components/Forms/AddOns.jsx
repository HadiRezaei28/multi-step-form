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
    switch (index) {
      case 0:
        return formik3.values.onlineService;
      case 1:
        return formik3.values.largerStorage;
      case 2:
        return formik3.values.customizeProfile;
    }
  };

  return (
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "600", fontSize: { xs: "20px", sm: "24px" } }}>
        انتخاب افزونه ها
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "hsl(231, 11%, 63%)", paddingTop: "5px", fontSize: { xs: "12px", sm: "16px" } }}
      >
        افزونه ها به بهبود تجربه بازی شما کمک می کنند{" "}
      </Typography>
      <Box
        mt={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {pickAddons.map((addons, index) => (
          <Box
            display="flex"
            key={index}
            sx={{
              width: "100%",
              border: "1px solid silver",
              borderRadius: "10px",
              marginBottom: "15px"
            }}
          >
            <input
              type="checkbox"
              id={addons.value}
              name={addons.value}
              onChange={formik3.handleChange}
              checked={setValue(index)}
              style={{ margin: "10px 10px 10px 20px", width: "15px" }}
            />
            <label for={addons.value} style={{width: "90%"}}>
              <AddonsCard addons={addons} time={time} />
            </label>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AddOns;
