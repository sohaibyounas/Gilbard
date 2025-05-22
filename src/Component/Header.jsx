import React from "react";
import style from "../assets/css/style.js";
import { Box, List, ListItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/images/logo.png";
import Image from "next/image.js";

const Header = () => {
  return (
    <Box sx={style.header}>
      <Box>
        <Image src={logo} alt="logo" style={style.headerimg} />
      </Box>
      <Box sx={style.headerMenu}>
        <List sx={style.headerMenuList}>
          <ListItem>HOME</ListItem>
          <ListItem>GAMES</ListItem>
          <ListItem>VIDEOS</ListItem>
          <ListItem>FORUMS</ListItem>
          <ListItem>PAGES</ListItem>
          <ListItem>CONTACT</ListItem>
          <ListItem sx={style.headListColor}>LOGIN</ListItem>
          <ListItem sx={style.headListColor}>REGISTER</ListItem>
        </List>
        <ListItem>
          <SearchIcon sx={style.searchIcon} />
        </ListItem>
      </Box>
    </Box>
  );
};

export default Header;
