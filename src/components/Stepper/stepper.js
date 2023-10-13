import React from "react";
import { Stepper, Step, StepLabel, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomizedStepper = () => {
  const { t } = useTranslation();

  const checkpoints = [
    t("TICKET_CREATED"),
    t("PACKAGE_RECEIVED"),
    t("OUT_FOR_DELIVERY"),
    t("DELIVERED"),
  ];
  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
      style={{ padding: "20px" }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <Stepper alternativeLabel>
          {checkpoints.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export default CustomizedStepper;
