import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import { cardsMonthly, cardsYearly, pickAddons } from "../data/data";

const Summary = ({ time, formik2, setActiveStep, formik3 }) => {
  const setPrice = (time) => {
    if (time) {
      if (formik2.values.radioValue === "معمولی") {
        return cardsYearly[0].price;
      }
      if (formik2.values.radioValue === "پیشرفته") {
        return cardsYearly[1].price;
      }
      if (formik2.values.radioValue === "حرفه ایی") {
        return cardsYearly[2].price;
      }
    } else {
      if (formik2.values.radioValue === "معمولی") {
        return cardsMonthly[0].price;
      }
      if (formik2.values.radioValue === "پیشرفته") {
        return cardsMonthly[1].price;
      }
      if (formik2.values.radioValue === "حرفه ایی") {
        return cardsMonthly[2].price;
      }
    }
  };

  const values = [
    formik3.values.onlineService,
    formik3.values.largerStorage,
    formik3.values.customizeProfile,
  ];

  const totalcost = () => {
    let cost = 0;
    if (time) {
      if(formik2.values.radioValue === "معمولی") {
        cost = cardsYearly[0].price;
        if (values[0]) {
          cost = cost + pickAddons[0].priceYear;
        }
        if (values[1]) {
          cost = cost + pickAddons[1].priceYear;
        }
        if (values[2]) {
          cost = cost + pickAddons[2].priceYear;
        }
      }
      if(formik2.values.radioValue === "پیشرفته") {
        cost = cardsYearly[1].price;
        if (values[0]) {
          cost = cost + pickAddons[0].priceYear;
        }
        if (values[1]) {
          cost = cost + pickAddons[1].priceYear;
        }
        if (values[2]) {
          cost = cost + pickAddons[2].priceYear;
        }
      }
      if(formik2.values.radioValue === "حرفه ایی") {
        cost = cardsYearly[2].price;
        if (values[0]) {
          cost = cost + pickAddons[0].priceYear;
        }
        if (values[1]) {
          cost = cost + pickAddons[1].priceYear;
        }
        if (values[2]) {
          cost = cost + pickAddons[2].priceYear;
        }
      }
    } else {
      if(formik2.values.radioValue === "معمولی") {
        cost = cardsMonthly[0].price;
        if (values[0]) {
          cost = cost + pickAddons[0].priceMonth;
        }
        if (values[1]) {
          cost = cost + pickAddons[1].priceMonth;
        }
        if (values[2]) {
          cost = cost + pickAddons[2].priceMonth;
        }
      }
      if(formik2.values.radioValue === "پیشرفته") {
        cost = cardsMonthly[1].price;
        if (values[0]) {
          cost = cost + pickAddons[0].priceMonth;
        }
        if (values[1]) {
          cost = cost + pickAddons[1].priceMonth;
        }
        if (values[2]) {
          cost = cost + pickAddons[2].priceMonth;
        }
      }
      if(formik2.values.radioValue === "حرفه ایی") {
        cost = cardsMonthly[2].price;
        if (values[0]) {
          cost = cost + pickAddons[0].priceMonth;
        }
        if (values[1]) {
          cost = cost + pickAddons[1].priceMonth;
        }
        if (values[2]) {
          cost = cost + pickAddons[2].priceMonth;
        }
      }
    }

    return cost;
  }

  return (
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "600" }}>
        مرحله نهایی
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "hsl(231, 11%, 63%)", paddingTop: "5px" }}
      >
        قبل از تایید نهائی موارد را دوباره چک کنید
      </Typography>
      <Box
        mt={5}
        sx={{
          bgcolor: "hsl(229, 24%, 92%)",
          borderRadius: "5px",
        }}
      >
        <Box
          display="felx"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          py={2}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ color: "hsl(213, 96%, 18%)", fontSize: {xs: "14px", sm: "16px"} }}
            >
              {formik2.values.radioValue} {time ? "(سالانه)" : "(ماهانه)"}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "hsl(229, 24%, 50%)", marginTop: "5px" }}
            >
              <Link
                href="#"
                underline="none"
                color="inherit"
                component="button"
                variant="body2"
                onClick={() => setActiveStep(1)}
                sx={{fontSize: {xs: "12px", sm: "14px"}}}
              >
                اصلاح
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              fontWeight={500}
              sx={{ color: "hsl(213, 96%, 18%)",fontSize: {xs: "12px", sm: "16px"} }}
            >
              {setPrice(time)} {time ? "تومان/سال" : "تومان/ماه"}
            </Typography>
          </Box>
        </Box>
        <Divider variant="middle" />
        {pickAddons.map(
          (addons, index) =>
            values[index] && (
              <Box
                key={index}
                display="felx"
                alignItems="center"
                justifyContent="space-between"
                px={2}
                py={1}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "hsl(229, 24%, 50%)", marginTop: "5px", fontSize: {xs: "10px", sm: "14px"} }}
                  >
                    {addons.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    fontWeight={300}
                    sx={{ color: "hsl(213, 96%, 18%)",fontSize: {xs: "10px", sm: "14px"} }}
                  >
                    {time ? addons.priceYear : addons.priceMonth}{" "}
                    {time ? "تومان/سال" : "تومان/ماه"}
                  </Typography>
                </Box>
              </Box>
            )
        )}
      </Box>
      <Box
        px={2}
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ color: "hsl(229, 24%, 50%)", fontSize: {xs: "10px", sm: "14px"}}}
          >
            {"مجموع"} {time ? "(سالانه)" : "(ماهانه)"}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            fontWeight={700}
            sx={{ color: "hsl(243, 100%, 62%)", fontSize: {xs: "12px", sm: "16px"} }}
          >
            {totalcost(time)} {time ? "تومان/سال" : "تومان/ماه"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
