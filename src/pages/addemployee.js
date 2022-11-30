import { useHistory } from "react-router-dom";
import EmployeeForm from "../components/form";
import classes from "./stylesheet.module.css"

function AddEmployeePage() {

const history = useHistory();

  function addEmployeeHandler(employeeData) {
    fetch("https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory", {
      method: "POST",
      body: JSON.stringify(employeeData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(alert("Employee Successfully Added"))
    .then(() => {
      history.replace('/directory'); 
    });
  }

  return (
    <div>
      <h4 className={classes.header}> Submit new employee below: </h4>
      <EmployeeForm className={classes.form} onAddEmployee={addEmployeeHandler}></EmployeeForm>
    </div>
  );
}

export default AddEmployeePage;
