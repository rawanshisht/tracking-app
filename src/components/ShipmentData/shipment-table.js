import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
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
  const boxStyle = {
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Box>
      <Typography variant="h6">Shipment Details</Typography>
      <TableContainer component={Paper} style={boxStyle}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{ overflowX: "auto" }}
        >
          <TableHead style={{ backgroundColor: "#f2f2f2" }}>
            <TableRow>
              <TableCell>Branch</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transitEvents
              .filter((d) => d.hub)
              .map((row) => (
                <TableRow
                  key={row.timestamp}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.hub}
                  </TableCell>
                  <TableCell align="center">
                    {moment(row.timestamp).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell align="center">
                    {moment(row.timestamp).format("HH:mm A")}
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
