import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import classes from "../pages/stylesheet.module.css";



function EmployeeForm(props) {
  const employeeInputRef = useRef();
  const extensionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmployee = employeeInputRef.current.value;
    const enteredExtension = extensionInputRef.current.value;

    const employeePhoneData = {
      name: enteredEmployee,
      extension: enteredExtension,
    };

    props.onAddEmployee(employeePhoneData);
  }

  return (
    <Form className={classes.form} onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label /*htmlFor="Name"*/>Name</Form.Label>
        <Form.Control
          type="text"
          /*required id="name"*/ ref={employeeInputRef}
        />
      </Form.Group>

      <Form.Group>
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


