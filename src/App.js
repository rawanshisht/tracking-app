import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShipmentDetails from "./components/ShipmentDetails/shipment-details";
import { Stack } from "@mui/material";
function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Navbar />
          <ShipmentDetails />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
