import React from "react";
import { Box, Grid, Stack, Typography, Button, CardMedia } from "@mui/material";
import image from "../../Assets/question.jpg";
import { useTranslation } from "react-i18next";
import "../../App.css";

const ShipmentProblem = () => {
  const { t } = useTranslation();
  return (
    <Box id="shipmentProblem">
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item xs={12} sm={4} md={4}>
          <CardMedia
            component="img"
            alt="Question Mark"
            image={image}
            id="cardMediaImage"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Stack spacing={2}>
            <Typography dir={t("dir")}>{t("ShipmentProblem")}</Typography>
            <Button dir={t("dir")} variant="contained" id="reportButton">
              {t("ReportProblem")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ShipmentProblem;
