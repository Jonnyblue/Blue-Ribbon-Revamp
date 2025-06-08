import { Box, Paper, Typography } from "@mui/material";
import logo from "./../../assets/blueribbonlogo.png";
import "./Header.css";


export default function Header() {
  return (
    <div className="header">
        <img className="header-image" src={logo} alt="Blue Ribbon Logo" />
        <Box className="header-text-box">
          <Typography className="header-text" >info@blueribbondivers.com</Typography>
          <Typography className="header-text">+63 917 8932719</Typography>
          </Box>
    </div>
  );
}