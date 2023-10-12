import React from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
const ShipmentProblem = () => {
  const boxStyle = {
    border: "1px solid grey",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };
  return (
    <Box style={boxStyle}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          Image
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <Typography>Is there a problem in your shipment?!</Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "#e30613", color: "white" }}
            >
              Report
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ShipmentProblem;
