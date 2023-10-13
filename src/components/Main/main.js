import React, { useEffect, useState } from "react";
import ShipmentTracking from "../ShipmentTracking/shipment-tracking";
import ShipmentDetails from "../ShipmentDetails/shipment-details";
import axios from "axios";
import "../../App.css";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
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
    <>
      <ShipmentTracking data={data} />
      {isLoading ? <CircularProgress /> : <ShipmentDetails data={data} />}
    </>
  );
};
export default Main;
