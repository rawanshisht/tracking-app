import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Stepper,
  Step,
  StepLabel,
  StepIcon,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const CustomStepper = (props) => {
  const { t } = useTranslation();
  const isLTR = t("dir") === "ltr";
  const checkpoints = [
    "TICKET_CREATED",
    "PACKAGE_RECEIVED",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
  ];
  let hasError = false;
  let initialActiveStep = checkpoints.indexOf(props.state);
  if (initialActiveStep === -1) {
    initialActiveStep = 2;
    hasError = true;
  }
  const [activeStep, setActiveStep] = useState(initialActiveStep);

  useEffect(() => {
    const newActiveStep = checkpoints.indexOf(props.state);
    if (newActiveStep !== -1 && newActiveStep !== activeStep) {
      setActiveStep(newActiveStep);
    }
  }, [props.state]);

  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={4} justifyContent="space-evenly">
        <Stack>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            sx={{
              "& .MuiStepConnector-line": {
                borderTop: `2px solid ${props.color}`,
              },
            }}
          >
            {checkpoints.map((label, index) => {
              const labelProps = {};

              if (hasError && index === 2) {
                labelProps.optional = (
                  <Typography variant="caption" style={{ color: props.color }}>
                    {t(props.state)}
                  </Typography>
                );
              }

              return (
                <Step key={label}>
                  <StepLabel
                    {...labelProps}
                    StepIconComponent={(stepProps) => (
                      <StepIcon
                        {...stepProps}
                        icon={
                          activeStep >= index ? (
                            <CheckCircleIcon style={{ color: props.color }} />
                          ) : (
                            <CheckCircleOutlineRoundedIcon
                              style={{ color: "grey" }}
                            />
                          )
                        }
                      />
                    )}
                  >
                    {t(label)}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Stack>
      </Stack>
    </>
  );
};
export default CustomStepper;
