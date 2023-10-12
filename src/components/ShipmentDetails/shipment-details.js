import React from "react";
import ShipmentTable from "../ShipmentData/shipment-table";
import { Stack, Box, Grid, Typography } from "@mui/material";
import ShipmentProblem from "../ShipmentProblem/shipment-problem";
const ShipmentDetails = () => {
  const address = {
    Street: "Salah Salem",
    Building: 99,
    Gov: "Cairo",
  };
  const boxStyle = {
    border: "1px solid grey",
    backgroundColor: "#f2f2f2",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <ShipmentTable />
      </Grid>
      <Grid item xs={3}>
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
