import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";
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
} from "@mui/material";

const ShipmentTable = () => {
  const { t } = useTranslation();
  const [transitEvents, setTransitEvents] = useState([]);
  const trackingNumber = 67151313;
  const cellStyle = {
    textAlign: t("dir") === "rtl" ? "right" : "left",
  };
  useEffect(() => {
    axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then((res) => {
        setTransitEvents(res.data.TransitEvents);
      })
      .catch((err) => console.log(err));
  }, []);
  const tableStyle = {
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Box>
      <Typography variant="h6" dir={t("dir")}>
        {t("ShipmentDetails")}
      </Typography>
      {t("dir") === "ltr" ? (
        <TableContainer component={Paper} style={tableStyle}>
          <Table
            sx={{ minWidth: 500, overflowX: "auto" }}
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Branch")}
                </TableCell>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Date")}
                </TableCell>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Time")}
                </TableCell>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Details")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transitEvents
                // .filter((d) => d.hub)
                .map((row) => (
                  <TableRow
                    key={row.timestamp}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" style={cellStyle}>
                      {row.hub || "--"}
                    </TableCell>
                    <TableCell style={cellStyle}>
                      {moment(row.timestamp).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell style={cellStyle}>
                      {moment(row.timestamp).format("HH:mm A")}
                    </TableCell>
                    <TableCell style={cellStyle}>{t(row.state)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer component={Paper} style={tableStyle}>
          <Table
            sx={{ minWidth: 500, overflowX: "auto" }}
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Details")}
                </TableCell>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Time")}
                </TableCell>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Date")}
                </TableCell>
                <TableCell dir={t("dir")} style={cellStyle}>
                  {t("Branch")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transitEvents
                // .filter((d) => d.hub)
                .map((row) => (
                  <TableRow
                    key={row.timestamp}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={cellStyle}>{t(row.state)}</TableCell>
                    <TableCell style={cellStyle}>
                      {moment(row.timestamp).format("HH:mm A")}
                    </TableCell>
                    <TableCell style={cellStyle}>
                      {moment(row.timestamp).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell component="th" scope="row" style={cellStyle}>
                      {row.hub || "--"}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ShipmentTable;
