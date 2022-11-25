/*Note: Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags.
For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
To learn more about the reasoning behind this convention, please read JSX In Depth.*/

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

function EmployeeForm(props) {
  const employeeInputRef = useRef();
  const extensionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmployee = employeeInputRef.current.value;
    const enteredExtension = extensionInputRef.current.value;

    const employeeData = {
      name: enteredEmployee,
      extension: enteredExtension,
    };

    props.onAddEmployee(employeeData);
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label /*htmlFor="Name"*/>Name</Form.Label>
        <Form.Control type="text" /*required id="name"*/ ref={employeeInputRef} />
      </Form.Group>

      <Form.Group >
        <Form.Label /*htmlFor="Extension"*/>Extension</Form.Label>
        <Form.Control
          type="text"
          required
          /*id="extenson"*/
          ref={extensionInputRef}
        />
      </Form.Group>
      {/* <div className={classes.actions}> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {/* </div> */}
    </Form>
  );
}


export default EmployeeForm;
