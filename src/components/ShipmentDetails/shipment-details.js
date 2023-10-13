import React from "react";
import ShipmentTable from "../ShipmentData/shipment-table";
import { Stack, Box, Grid, Typography } from "@mui/material";
import ShipmentProblem from "../ShipmentProblem/shipment-problem";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "../../App.css";
const ShipmentDetails = (props) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const address = {
    AddressLine1: "Zohor Road",
    AddressLine2: "Madinet Nasr",
    BuildingNumber: "64",
    PostCode: "B1 R1",
    Government: "Cairo",
    Country: "Egypt",
  };
  const isLTR = t("dir") === "ltr";
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      {isLTR ? (
        <>
          <Grid item xs={10} sm={10} md={6}>
            <ShipmentTable id={id} data={props.data} />
          </Grid>
          <Grid item xs={10} sm={10} md={4}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h6" dir={t("dir")}>
                  {t("DeliveryAddress")}
                </Typography>
                <Box id="addressBox">{Object.values(address).join(", ")}</Box>
              </Box>
              <Box>
                <ShipmentProblem />
              </Box>
            </Stack>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            container
            item
            xs={10}
            sm={10}
            md={10}
            justifyContent="space-evenly"
          >
            <Grid item xs={10} sm={10} md={4} sx={{ order: { xs: 2, md: 1 } }}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h6" dir={t("dir")}>
                    {t("DeliveryAddress")}
                  </Typography>
                  <Box id="addressBox">{Object.values(address).join(", ")}</Box>
                </Box>
                <Box>
                  <ShipmentProblem />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={10} sm={10} md={6} sx={{ order: { xs: 1 } }}>
              <ShipmentTable id={id} data={props.data} />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default ShipmentDetails;
