import React from "react";
import { Box, Grid, Stack, Typography, Button, CardMedia } from "@mui/material";
import image from "../../Assets/question.jpg";
import { useTranslation } from "react-i18next";

const ShipmentProblem = () => {
  const { t } = useTranslation();
  const boxStyle = {
    border: "1px solid grey",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };
  return (
    <Box style={boxStyle}>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item xs={12} sm={4} md={4}>
          <CardMedia
            component="img"
            alt="Question Mark"
            image={image}
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Stack spacing={2}>
            <Typography dir={t("dir")}>{t("ShipmentProblem")}</Typography>
            <Button
              dir={t("dir")}
              variant="contained"
              style={{ backgroundColor: "#e30613", color: "white" }}
            >
              {t("ReportProblem")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ShipmentProblem;
