import React from "react";
import moment from "moment";
import "../../App.css";
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

const ShipmentTable = (props) => {
  const { t } = useTranslation();
  const { data } = props;
  const isLTR = t("dir") === "ltr";
  const cellStyle = {
    textAlign: isLTR ? "left" : "right",
  };
  const renderTableHeaders = () => {
    let colHeader = ["Branch", "Date", "Time", "Details"];
    return (
      <TableHead id="tableHead">
        <TableRow>
          {isLTR
            ? [...colHeader].map((col) => (
                <TableCell key={col} dir={t("dir")} style={cellStyle}>
                  {t(col)}
                </TableCell>
              ))
            : [...colHeader].reverse().map((col) => (
                <TableCell key={col} dir={t("dir")} style={cellStyle}>
                  {t(col)}
                </TableCell>
              ))}
        </TableRow>
      </TableHead>
    );
  };
  const renderTableBody = () => {
    return (
      data?.TransitEvents
        // .filter((d) => d.hub)
        .map((row) => (
          <TableRow key={row.timestamp}>
            {isLTR
              ? [
                  row.hub || "--",
                  moment(row.timestamp).format("DD/MM/YYYY"),
                  moment(row.timestamp).format("HH:mm A"),
                  t(row.state),
                ].map((cellData, index) => (
                  <TableCell key={index} dir={t("dir")} style={cellStyle}>
                    {cellData}
                  </TableCell>
                ))
              : [
                  t(row.state),
                  moment(row.timestamp).format("HH:mm A"),
                  moment(row.timestamp).format("DD/MM/YYYY"),
                  row.hub || "--",
                ].map((cellData, index) => (
                  <TableCell key={index} dir={t("dir")} style={cellStyle}>
                    {cellData}
                  </TableCell>
                ))}
          </TableRow>
        ))
    );
  };
  return (
    <Box>
      <Typography variant="h6" dir={t("dir")}>
        {t("ShipmentDetails")}
      </Typography>
      <TableContainer component={Paper} id="tableStyle">
        <Table
          sx={{ minWidth: 500, overflowX: "auto" }}
          aria-label="simple table"
        >
          {renderTableHeaders()}
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShipmentTable;
