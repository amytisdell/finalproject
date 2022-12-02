import React from "react";
import { useEffect } from "react";
// import { useState } from "react"; reference for experiment on updating state within editNameHandler (see bottom of page)

function DirectoryItem({ id, name, extension, entries, setLoadedDirectory }) {
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    console.log("printing state from directoryItem: ", entries);
  }, [entries]);

  function deleteHandler() {
    fetch(
      `https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory/${id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setLoadedDirectory((prevDirectory) => {
        return prevDirectory.filter((employee) => employee.id !== id);
      });
    });
  }

  // const [count, setCount] = useState(0); reference for experiment on updating state within editNameHandler

  // useEffect(() => {
  //   console.log('Count is now: ', count);
  // }, [count]);
  // 30-32 reference for experiment on updating state within editNameHandler (see bottom of page)

  function editNameHandler() {
    const newName = prompt("Please enter user name");
    const sameId = id;
    const ext = extension;
    const newNameData = { id: sameId, name: newName, extension: ext };

    fetch(
      `https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNameData),
      }
    )
      .then((response) => response.json())
      .then((newNameData) => {
        console.log("Success:", newNameData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .then(refreshPage);
    // .then(setCount(count + 1)); reference for experiment on updating state within editNameHandler (see bottom of page)
  }

  function editExtHandler() {
    const sameName = name;
    const sameId = id;
    const newExt = prompt("Please enter extension");
    const newExtData = { id: sameId, name: sameName, extension: newExt };

    fetch(
      `https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExtData),
      }
    )
      .then((response) => response.json())
      .then((newExtData) => {
        console.log("Success:", newExtData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .then(refreshPage);
  }

  return (
    <li /*className={classes.item}*/>
      <div>
        <p>Employee Name: {name}</p>
        <p>Employee Extension: {extension}</p>

        <button onClick={deleteHandler}> Delete </button>
        <button onClick={editNameHandler}> Edit Name </button>
        <button onClick={editExtHandler}> Edit Extension </button>
      </div>
      <div /*className={classes.actions}*/></div>
    </li>
  );
}

export default DirectoryItem;

// I was able to successfully update the state of the component using the noted-out lines of code above. However, I was still unable to get the code to rerender
// the Edit Name and Edit Extension without a manual page refresh.
