import { Grid, Typography, Stack, Divider } from "@mui/material";
import CustomizedStepper from "../Stepper/stepper";
import "../../App.css";
import { useTranslation } from "react-i18next";

const ShipmentTracking = () => {
  const { t } = useTranslation();
  const isLTR = t("dir") === "ltr";
  const cellStyle = {
    textAlign: isLTR ? "left" : "right",
  };
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        justifyContent="space-evenly"
        id="cardBorder"
      >
        <Stack divider={<Divider orientation="horizontal" />}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Stack>
              <Typography variant="h6" style={cellStyle}>
                {t("ShipmentNumber") + " 13737343"}
              </Typography>
              <Typography variant="h6" style={cellStyle}>
                --
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="h6" style={cellStyle}>
                {t("LastUpdate")}
              </Typography>
              <Typography variant="h6" style={cellStyle}>
                13/3/2020
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" style={cellStyle}>
                {t("VendorName")}
              </Typography>
              <Typography variant="h6" style={cellStyle}>
                Souq.com
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" style={cellStyle}>
                {t("ExpectedDeliveryDate")}
              </Typography>
              <Typography variant="h6" style={cellStyle}>
                15/3/2020
              </Typography>
            </Stack>
          </Stack>
          <Grid justifyContent="center" alignItems="center">
            <CustomizedStepper />
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default ShipmentTracking;
