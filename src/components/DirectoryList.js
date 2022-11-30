import DirectoryItem from "./DirectoryItem";
import classes from "../pages/stylesheet.module.css";
// import { useState } from "react";

function DirectoryList(props) {

  return (
    console.log(props.setLoadedDirectory),
    <ul className={classes.list}>
      {props.entries.map((employee, i) => (
        <DirectoryItem
          key={i}
          id={employee.id}
          name={employee.name}
          extension={employee.extension}
          setLoadedDirectory={props.setLoadedDirectory}
        />
      ))}
    </ul>
  );
}
export default DirectoryList;
