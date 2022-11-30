import React from "react";
import { useEffect } from "react";

function DirectoryItem({ id, name, extension, entries, setLoadedDirectory }) {
  
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
  

  function editNameHandler() {
    console.log(name);
    const newName = prompt("Please enter user name");
    const sameId = id;
    const ext = extension;
    const newNameData = { id: sameId, name: newName, extension: ext };
    console.log(newNameData);
    console.log(newName);
    console.log(sameId);
    console.log(ext);

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
      }).catch((error) => {
        console.error("Error:", error);
      });
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
      });

  



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

// const refreshPage= () => {
//     window.location.reload(false)
// }