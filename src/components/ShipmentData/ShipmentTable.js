import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  useMediaQuery,
} from "@mui/material";

const ShipmentTable = () => {
  //   const data = [
  //     {
  //       key: "123",
  //       branch: "Madinet Nasr",
  //       date: "23/7/2023 monday",
  //       time: "12:00 PM",
  //       details: "Delivered",
  //     },
  //     {
  //       key: "124",
  //       branch: "Madinet Nasr",
  //       date: "23/7/2023 monday",
  //       time: "12:00 PM",
  //       details: "Delivered",
  //     },
  //     {
  //       key: "125",
  //       branch: "Madinet Nasr",
  //       date: "23/7/2023 monday",
  //       time: "12:00 PM",
  //       details: "Delivered",
  //     },
  //   ];
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [transitEvents, setTransitEvents] = useState([]);
  const trackingNumber = 67151313;
  useEffect(() => {
    axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then((res) => {
        setTransitEvents(res.data.TransitEvents);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Typography variant="h6">Shipment Details</Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{ overflowX: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Branch</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transitEvents.map((row) => (
              <TableRow
                key={row.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Madinet Nasr
                </TableCell>
                <TableCell align="center">
                  {row.timestamp.split("T")[0]}
                </TableCell>
                <TableCell align="center">
                  {row.timestamp.split("T")[1].split("Z")[0]}
                </TableCell>
                <TableCell align="center">{row.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShipmentTable;
