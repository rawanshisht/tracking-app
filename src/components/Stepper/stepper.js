import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Stack, Stepper, Step, StepLabel } from "@mui/material";
import Check from "@mui/icons-material/Check";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CustomStepper = (props) => {
  const { t } = useTranslation();
  const checkpoints = [
    "TICKET_CREATED",
    "PACKAGE_RECEIVED",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const state = props.state;

  const initialStepIndex = checkpoints.indexOf(state);
  const [stepIndex, setStepIndex] = useState(
    initialStepIndex !== -1 ? initialStepIndex : 2
  );

  useEffect(() => {
    if (state === "CANCELLED" || stepIndex === -1) {
      setStepIndex(2);
      setActiveStep(2);
    } else {
      setActiveStep(stepIndex);
    }
  }, [state, stepIndex]);

  const CustomStepIcon = ({ completed, active }) => {
    return (
      <div>
        {completed ? (
          <Check sx={{ color: "#3f51b5" }} />
        ) : (
          <FiberManualRecordIcon sx={{ color: active ? "#3f51b5" : "#ccc" }} />
        )}
      </div>
    );
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper activeStep={stepIndex} alternativeLabel>
        {checkpoints.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={(props) => (
                <CustomStepIcon
                  completed={index <= stepIndex}
                  active={index === stepIndex}
                />
              )}
            >
              {t(label)}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default CustomStepper;
