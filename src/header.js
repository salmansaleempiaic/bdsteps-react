import React from "react";

const Header = () => {
  return (
    <div className="outer-header">
      <div className="header">
        <a className="language-anchor">Spanish</a>
        <input placeholder="Search" className="search-box"></input>
        <button>
          <img
            className="search-icon"
            src="https://simg.nicepng.com/png/small/350-3506490_search-icon-small-search-icon-small-png.png"
            width="15px"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Header;
