import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const PersonalInfo = ({ formik1 }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "600", fontSize: { xs: "20px", sm: "24px" } }}
      >
        اطلاعات شخصی
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: "hsl(231, 11%, 63%)",
          paddingTop: "5px",
          fontSize: { xs: "12px", sm: "16px" },
        }}
      >
        لطفا نام، ایمیل و شماره تلفن همراه خود را وراد کنید.
      </Typography>
      <Box mb={2}>
        <TextField
          id="name"
          name="name"
          label="نام"
          variant="outlined"
          value={formik1.values.name}
          onChange={formik1.handleChange}
          error={formik1.touched.name && Boolean(formik1.errors.name)}
          helperText={formik1.touched.name && formik1.errors.name}
          sx={{ width: "100%", mt: 5 }}
        />
      </Box>
      <TextField
        id="email"
        name="email"
        label="ایمیل"
        variant="outlined"
        value={formik1.values.email}
        onChange={formik1.handleChange}
        error={formik1.touched.email && Boolean(formik1.errors.email)}
        helperText={formik1.touched.email && formik1.errors.email}
        sx={{ width: "100%", mb: 2 }}
      />
      <TextField
        id="phone"
        name="phone"
        label="تلفن همراه"
        variant="outlined"
        value={formik1.values.phone}
        onChange={formik1.handleChange}
        error={formik1.touched.phone && Boolean(formik1.errors.phone)}
        helperText={formik1.touched.phone && formik1.errors.phone}
        sx={{ width: "100%", mb: 2 }}
      />
    </Box>
  );
};

export default PersonalInfo;
