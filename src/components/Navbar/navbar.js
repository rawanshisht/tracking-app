import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import i18n from "i18next";

function Navbar() {
  const [isEng, setIsEng] = useState(true);
  const handleLanguageClick = () => {
    isEng ? i18n.changeLanguage("ar") : i18n.changeLanguage("en");
    setIsEng(!isEng);
  };

  return (
    <Box>
      Navbar
      <Button
        disableRipple
        onClick={handleLanguageClick}
        style={{
          backgroundColor: "transparent",
          color: "#e30613",
          fontWeight: "bold",
        }}
      >
        {isEng ? "ع" : "Eng"}
      </Button>
    </Box>
  );
}
export default Navbar;
