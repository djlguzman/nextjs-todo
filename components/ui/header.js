import React from "react";
import Link from "next/link";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.links}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/todo">APP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
