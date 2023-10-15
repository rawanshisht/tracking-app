import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Popover,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import i18n from "i18next";
import { useNavigate } from "react-router";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isEng, setIsEng] = useState(true);
  const navigate = useNavigate();
  const handleLanguageClick = () => {
    isEng ? i18n.changeLanguage("ar") : i18n.changeLanguage("en");
    setIsEng(!isEng);
  };

  const pages = ["Products", "Prices", "Contact Us", "Track Shipment"];

  const handleTrackShipmentClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    navigate(`/${searchText}`);
    setSearchText("");
    handlePopoverClose();
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6">Bosta</Typography>

        {pages.map((page, index) => (
          <Button
            key={index}
            color="inherit"
            disableRipple
            style={{ backgroundColor: "transparent" }}
          >
            {page}
          </Button>
        ))}

        <Button onClick={handleTrackShipmentClick}>Track Shipment</Button>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box p={2}>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              fullWidth
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              id="reportButton"
              variant="contained"
              size="small"
              fullWidth
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Popover>

        <Button disableRipple onClick={handleLanguageClick} id="languageButton">
          {isEng ? "ع" : "Eng"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
