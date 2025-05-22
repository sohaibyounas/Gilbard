import React from "react";
import "../assets/css/style.css";
import { Box } from "@mui/material";
import Image from "next/image";
import hero2 from "../assets/images/hero2.jpg";
import Button from "./Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Hero = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Image src={hero2} alt="hero2" style={{ width: "100%" }} />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          textAlign: "center",
          fontSize: "90px",
          fontWeight: 400,
          lineHeight: "108px",
          color: "#fff",
        }}
      >
        THE WITCHER 3 BETTLE BEGAN’S HERE
      </Box>
      {/* Button component */}
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "45%",
          textAlign: "center",
        }}
      >
        <Button />
        {/* prev/next arrow */}
        <Box
          sx={{
            position: "relative",
            top: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            margin: "0 auto",
            color: "#989FA1",
            fontSize: "20px",
          }}
        >
          <Box>
            Next
            <ArrowRightAltIcon
              sx={{
                position: "absolute",
                right: "-8px",
                top: "-3px",
                fontSize: "30px",
                color: "#989FA1",
              }}
            />
          </Box>
          <Box>
            <KeyboardBackspaceIcon
              sx={{
                position: "absolute",
                left: "-8px",
                top: "-3px",
                fontSize: "30px",
                color: "#989FA1",
              }}
            />
            Pre
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
