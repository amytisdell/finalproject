function DirectoryItem(props) {
  //   const [deleteUser, useDeleteUser] = useState(false);

  function DeleteHandler() {
    fetch(
      `https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory/${props.id}`,
      {
        method: "DELETE",
      }
    )
      .then((result) => {
        result.json().then(alert("employee successfully deleted"));
      })
      .then(console.log(props.id));
  }

  function editNameHandler() {
    console.log(props.name);
    const newName = prompt("Please enter user name");
    const sameId = props.id;
    const ext = props.extension;
    const newNameData = { id: sameId, name: newName, extension: ext };
    console.log(newNameData);
    console.log(newName);
    console.log(sameId);
    console.log(ext);
    fetch(
      `https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory/${props.id}`,
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
      });
  }

  function editExtHandler() {
    const sameName = props.name;
    const sameId = props.id;
    const newExt = prompt("Please enter extension");
    const newExtData = { id: sameId, name: sameName, extension: newExt };
    fetch(
      `https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory/${props.id}`,
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
        <p>Employee Name: {props.name}</p>
        <p>Employee Extension: {props.extension}</p>

        <button onClick={DeleteHandler}> Delete </button>
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
