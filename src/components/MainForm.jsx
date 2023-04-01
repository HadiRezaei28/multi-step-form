import React, { useState } from "react";

// Material Ui
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

//images
import background from "../assets/images/background.jpg";

//components
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import AddOns from "./AddOns";
import Thank from "./Thank";

const steps = ["اطلاعات شخصی", "انتخاب طرح", "افزونه ها", "مرحله نهایی"];

const stepContent = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <SelectPlan />;
    case 2:
      return <AddOns />;
    case 3:
      return <Summary />;
    default:
      return <div>Not Found</div>;
  }
};

const MainForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // mx="auto"
        sx={{
          height: "568px",
          width: "100%",
          background: "hsl(0, 0%, 100%)",
          borderRadius: "20px",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "568px",
            backgroundImage: `url(${background})`,
            borderRadius: "20px",
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{ paddingTop: "30px", paddingLeft: "30px" }}
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
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "calc(100% - 250px)", height: "100%" }}
        >
          <Box sx={{ width: "80%", height: "90%" }}>
            {activeStep === steps.length ? <Thank /> : stepContent(activeStep)}
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
                  sx={{
                    backgroundColor: "hsl(213, 96%, 18%)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "hsl(200, 86%, 28%)",
                    },
                  }}
                >
                  تایید
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    backgroundColor: "hsl(213, 96%, 18%)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "hsl(200, 86%, 28%)",
                    },
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
                  }}
                >
                  مرحله قبل
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MainForm;
