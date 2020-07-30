import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <a className="link" href="#" target="_blank">
          Spanish
        </a>
        <input type="text" placeholder="Search" className="search"></input>
        <button className="button">
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/search-solid.png"
            width="14px"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Header;
