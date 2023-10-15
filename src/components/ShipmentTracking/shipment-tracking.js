import { Grid, Typography, Stack, Divider } from "@mui/material";
import CustomizedStepper from "../Stepper/stepper";
import "../../App.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import "../../App.css";

const ShipmentTracking = (props) => {
  const { t } = useTranslation();
  const { data } = props;
  const isLTR = t("dir") === "ltr";
  const cellStyle = {
    textAlign: isLTR ? "left" : "right",
  };
  let color;
  switch (data.CurrentStatus?.state) {
    case "DELIVERED":
      color = "green";
      break;
    case "WAITING_FOR_CUSTOMER_ACTION":
      color = "yellow";
      break;
    case "undefined":
      color = "grey";
      break;
    default:
      color = "red";
  }

  return (
    <Grid container spacing={2} id="cardBorder">
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" style={{ cellStyle }}>
          {t("ShipmentNumber")} {data.TrackingNumber}
        </Typography>
        <Typography variant="h6" style={{ color, cellStyle }}>
          {t(data.CurrentStatus?.state)}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" style={{ cellStyle }}>
          {t("LastUpdate")}
        </Typography>
        <Typography variant="h6" style={{ cellStyle }}>
          {moment(data.CurrentStatus?.timestamp).format("DD/MM/YYYY hh:mm A")}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" style={{ cellStyle }}>
          {t("VendorName")}
        </Typography>
        <Typography variant="h6" style={{ cellStyle }}>
          Souq.com
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" style={{ cellStyle }}>
          {t("ExpectedDeliveryDate")}
        </Typography>
        <Typography variant="h6" style={{ cellStyle }}>
          {moment(data.PromisedDate).format("DD/MM/YYYY")}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <CustomizedStepper state={data.CurrentStatus?.state} color={color} />
      </Grid>
    </Grid>
  );
};
export default ShipmentTracking;
