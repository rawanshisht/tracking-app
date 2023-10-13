import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShipmentDetails from "./components/ShipmentDetails/shipment-details";
import { Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Cairo, sans-serif",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack justifyContent="space-around" alignItems="center" spacing={1}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/:id" element={<ShipmentDetails />} />
              <Route path="/" element={<ShipmentDetails />} />
            </Routes>
          </BrowserRouter>
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
