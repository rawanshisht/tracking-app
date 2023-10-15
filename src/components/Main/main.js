import React, { useEffect, useState } from "react";
import ShipmentTracking from "../ShipmentTracking/ShipmentTracking";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails";
import axios from "axios";
import "../../App.css";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
const Main = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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
        navigate(`/notfound`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

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
