import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/Main/main";
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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Stack justifyContent="space-around" alignItems="center" spacing={1}>
            <Navbar />
            <Routes>
              <Route path="/:id" element={<Main />} />
            </Routes>
          </Stack>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
