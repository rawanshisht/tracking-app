import React, { useEffect, useState } from "react";
import ShipmentTracking from "../ShipmentTracking/shipment-tracking";
import ShipmentDetails from "../ShipmentDetails/shipment-details";
import axios from "axios";
import "../../App.css";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { Stack, Grid } from "@mui/material";
const Main = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://tracking.bosta.co/shipments/track/${id}`
        );
        setData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid item xs={10} sm={10} md={10}>
            <ShipmentTracking data={data} />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <ShipmentDetails data={data} />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default Main;
