import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/HomePage/HomePage";
import Main from "./components/Main/MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
          <Stack
            xs={10}
            sm={10}
            md={10}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={1}
          >
            <Navbar />
            <Routes>
              <Route path="/:id" element={<Main />} />
              <Route path="/" element={<Home />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Stack>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
