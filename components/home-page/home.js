import Link from "next/link";
import React from "react";
import classes from "./home.module.css";

console.log(process.env.NEW_KEY)
console.log(process.env.TEST_KEY)

const Home = () => {

  return (
    <div className={classes.home}>
      <h1>WELCOME!</h1>
      <Link href="/todo">
        <h2>Click here to proceed</h2>
      </Link>
    </div>
  );
};

export default Home;
