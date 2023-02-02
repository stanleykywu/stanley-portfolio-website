import React from "react";
import {Outlet} from "react-router-dom";
import { Button, Toolbar, Box, AppBar } from "@mui/material";
import RESUME from '../assets/resume.pdf'

const Layout = () => {
  return (
    <>
      <AppBar position="fixed" elevation={0} style={{ background: "#E5EDF1" }}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
              {/* whatever is on the left side */}
          </Box>
          <Button href="." style={{ color:"black" }}>Home</Button>
          <Button href="./blogs" style={{ color:"black" }}>Blog</Button>
          <Button href=".#contact" style={{ color:"black" }}>Contact</Button>
          {/* <Button href=".#research">Papers</Button> */}
          <Button href={RESUME} target="_blank" style={{ color:"black" }}>CV</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;