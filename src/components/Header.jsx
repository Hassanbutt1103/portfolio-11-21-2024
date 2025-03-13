import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import logo from "../assets/CNTL C&V.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 sm:px-10 sm:py-2">
      {/* Logo */}
      <h1 className="font-bold font-sans flex items-center">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-auto sm:w-16 select-none pointer-events-none"
          />
        </NavLink>
      </h1>

      {/* Middle Section */}
      <div className="hidden sm:block text-gray-300 border font-extrabold border-gray-300 rounded-xl px-4 hover:bg-gray-300 hover:text-purple-950">
        1103butt
      </div>

      {/* Right Section - Menu */}
      <div className="flex items-center">
        <span className="hidden sm:block text-gray-300">Menu</span>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "#e0e0e0",
            "&:hover": {
              color: "gray",
            },
          }}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <NavLink to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </NavLink>
          <NavLink to="/Contact">
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </NavLink>
          <NavLink to="/services">
          <MenuItem onClick={handleClose}>Services</MenuItem>
          </NavLink>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
