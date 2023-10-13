import React from "react";
import { Stepper, Step, StepLabel, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//import { makeStyles } from "@mui/styles";

const CustomizedStepper = () => {
  const { t } = useTranslation();
  const checkpoints = [
    t("TICKET_CREATED"),
    t("PACKAGE_RECEIVED"),
    t("OUT_FOR_DELIVERY"),
    t("DELIVERED"),
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  // const useStyles = makeStyles((theme) => ({
  //   connectorLine: {
  //     borderTop: "2px solid #3f51b5",
  //   },
  // }));

  const CustomStepIcon = ({ completed }) => {
    //const classes = useStyles();
    //className={classes.connectorLine}
    return (
      <div>
        {completed ? (
          <CheckCircleIcon color="primary" />
        ) : (
          <div style={{ width: 24, height: 24 }} />
        )}
      </div>
    );
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
      style={{ padding: "20px" }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {checkpoints.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={() => (
                  <CustomStepIcon completed={index <= activeStep} />
                )}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export default CustomizedStepper;
