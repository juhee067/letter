import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="gnb">
          <ul>
            <li>
              <a href="">Letter</a>
            </li>
            <li>
              <a href="">Gift</a>
            </li>
            <li>
              <a className="home" href="">
                Home
              </a>
            </li>
            <li>
              <a href="">Writing a letter</a>
            </li>
            <li>
              <a href="">Camera</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
