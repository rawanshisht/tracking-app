import "./App.css";
import Navbar from "./components/Navbar/navbar";
import ShipmentTable from "./components/ShipmentData/ShipmentTable";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <ShipmentTable />
      </ThemeProvider>
    </>
  );
}

export default App;
