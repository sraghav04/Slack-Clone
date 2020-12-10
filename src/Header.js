import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="Type to Search" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
