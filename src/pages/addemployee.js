import { useHistory } from "react-router-dom";
import EmployeeForm from "../components/form";

function AddEmployeePage() {

const history = useHistory();

  function addEmployeeHandler(employeeData) {
    fetch("https://database-dd1fb-default-rtdb.firebaseio.com/directory.json", {
      method: "POST",
      body: JSON.stringify(employeeData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace('/directory'); /*would rather have a success notification and form clear*/ 
    });
  }

  return (
    <div>
      <h4> Submit new employee below: </h4>
      <EmployeeForm onAddEmployee={addEmployeeHandler}></EmployeeForm>
    </div>
  );
}

export default AddEmployeePage;
