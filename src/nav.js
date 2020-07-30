import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li className="green">
          ABOUT
          <ul>
            <li>About BD-STEPS</li>
            <li>Study Components</li>
            <li>Data Collection</li>
            <li>Birth Defects Included</li>
            <li>Investigators And Staff</li>
          </ul>
        </li>
        <li className="orange">
          FOR PARTICIPANTS
          <ul>
            <li>For Participants</li>
            <li>Confidentiality</li>
            <li>Stay Informed</li>
            <li>Benefits</li>
            <li>5 Things to Know</li>
            <li>FAQ</li>
          </ul>
        </li>
        <li className="blue">
          STUDY CENTERS
          <ul>
            <li>Overview</li>
            <li>Arkansas</li>
            <li>California</li>
            <li>Georgia</li>
            <li>Iowa</li>
            <li>Massachusetts</li>
            <li>New York</li>
            <li>North Carolina</li>
          </ul>
        </li>
        <li className="yellow">RESEARCH</li>
        <li className="red">RESOURCES</li>
      </ul>
    </div>
  );
};

export default Nav;
