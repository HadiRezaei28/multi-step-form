import React, { useState } from "react";

// Material Ui
import {
  Box,
  Button,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

//images
import background from "../assets/images/background.jpg";

//components
import PersonalInfo from "./Forms/PersonalInfo";
import SelectPlan from "./Forms/SelectPlan";
import Summary from "./Forms/Summary";
import AddOns from "./Forms/AddOns";
import Thank from "./Forms/Thank";
import { useFormik } from "formik";

// functions
import {
  PersonalInfoSchema,
  SelectPlanSchema,
} from "./validations/validationForm";

const steps = ["اطلاعات شخصی", "انتخاب طرح", "افزونه ها", "مرحله نهایی"];

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [time, setTime] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik1 = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: PersonalInfoSchema,
    onSubmit: () => {
      handleNext();
    },
  });

  const formik2 = useFormik({
    initialValues: {
      radioValue: "",
    },
    validationSchema: SelectPlanSchema,
    onSubmit: () => {
      handleNext();
    },
  });
  const formik3 = useFormik({
    initialValues: {
      onlineService: false,
      largerStorage: false,
      customizeProfile: false,
    },
    onSubmit: () => {
      handleNext();
    },
  });

  console.log(formik3.values)

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return formik1.handleSubmit;
      case 1:
        return formik2.handleSubmit;
      case 2:
        return formik3.handleSubmit;
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        my={5}
        mx="auto"
        sx={{
          height: "600px",
          width: "70%",
          background: "hsl(0, 0%, 100%)",
          borderRadius: "20px",
          padding: "15px",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            height: {xs: "10%", md: "100%"},
            backgroundImage: `url(${background})`,
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{ width: "80%", height: "60%", marginTop: "40px", display: {xs: "none", md:"flex"} }}
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="center"
                  >
                    <Typography variant="caption" sx={{ color: "#333" }}>
                      مرحله {index + 1}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ color: "hsl(213, 96%, 18%)", fontWeight: 500 }}
                    >
                      {step}
                    </Typography>
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stepper
            dir= "ltr"
            activeStep={activeStep}
            sx={{ width: "80%", height: "100%", display: {xs: "flex", md:"none"} }}
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>
                  
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{ width: "700px", height: {xs: "90%", md: "100%"} }}
        >
          <form
            onSubmit={stepContent(activeStep)}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box pt={5} sx={{ width: "80%", height: "90%" }}>
              {/* {activeStep === steps.length ? <Thank /> : stepContent(activeStep)} */}
              {activeStep === 0 && <PersonalInfo formik1={formik1} />}
              {activeStep === 1 && (
                <SelectPlan time={time} setTime={setTime} formik2={formik2} />
              )}
              {activeStep === 2 && <AddOns time={time} formik3={formik3} />}
              {activeStep === 3 && (
                <Summary
                  time={time}
                  formik2={formik2}
                  setActiveStep={setActiveStep}
                  formik3={formik3}
                />
              )}
              {activeStep === 4 && <Thank />}
            </Box>
            {activeStep < steps.length && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "80%", height: "10%" }}
              >
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    type="submit"
                    sx={{
                      backgroundColor: "hsl(213, 96%, 18%)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "hsl(200, 86%, 28%)",
                      },
                      fontSize: {xs: "10px", sm: "14px"}
                    }}
                  >
                    تایید
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "hsl(213, 96%, 18%)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "hsl(200, 86%, 28%)",
                      },
                      fontSize: {xs: "10px", sm: "14px"}
                    }}
                  >
                    مرحله بعد
                  </Button>
                )}

                {activeStep !== 0 && (
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{
                      backgroundColor: "hsl(213, 96%, 18%)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "hsl(200, 86%, 28%)",
                      },
                      fontSize: {xs: "10px", sm: "14px"}
                    }}
                  >
                    مرحله قبل
                  </Button>
                )}
              </Box>
            )}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainForm;
