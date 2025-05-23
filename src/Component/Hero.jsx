"use client";
import React, { useState } from "react";
import style from "../assets/css/style.js";
import { Box } from "@mui/material";
import Image from "next/image";
import Button from "./Button";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Hero = () => {
  // hero image change
  const [index, setIndex] = useState(0);

  // go to next image
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  // go to previous image
  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {heroImages.map(
        (item, i) =>
          index === i && (
            <Box sx={style.hero} key={i} position="relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={style.heroimg}
              />
              <Box sx={style.heroText}>{item.text}</Box>

              {/* Button prev/nex */}
              <Box sx={style.heroButton}>
                <Button />
                <Box sx={style.btnbox}>
                  <Box onClick={nextImage} sx={style.heroArrowBox}>
                    <KeyboardBackspaceIcon sx={style.heroNexIcon} />
                    Prev
                  </Box>
                  <Box onClick={prevImage} sx={style.heroArrowBox}>
                    <ArrowRightAltIcon sx={style.heroPrevIcon} />
                    Next
                  </Box>
                </Box>
              </Box>
            </Box>
          )
      )}
    </>
  );
};

export default Hero;

const heroImages = [
  {
    title: "THE WITCHER 3",
    text: "BETTLE BEGAN’S HERE",
    image: hero2, // image url
  },
  {
    title: "THE WITCHER 3",
    text: "BETTLE BEGAN’S HERE",
    image: hero3, // image url
  },
];
