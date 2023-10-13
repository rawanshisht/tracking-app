import React from "react";
import ShipmentTable from "../ShipmentData/shipment-table";
import { Stack, Box, Grid, Typography } from "@mui/material";
import ShipmentProblem from "../ShipmentProblem/shipment-problem";
const ShipmentDetails = () => {
  const address = {
    AddressLine1: "Zohor Road",
    AddressLine2: "Madinet Nasr",
    BuildingNumber: "64",
    PostCode: "B1 R1",
    Government: "Cairo",
    Country: "Egypt",
  };
  const boxStyle = {
    border: "1px solid grey",
    backgroundColor: "#f2f2f2",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  };
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid item xs={10} sm={10} md={6}>
        <ShipmentTable />
      </Grid>
      <Grid item xs={10} sm={10} md={4}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h6">Delivery Address</Typography>
            <Box style={boxStyle}>{Object.values(address).join(", ")}</Box>
          </Box>
          <Box>
            <ShipmentProblem />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default ShipmentDetails;
