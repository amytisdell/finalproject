import Card from "react-bootstrap/Card" 

function Homepage() {
  return (
    <div className="greeting">
      <Card>
        <Card.Body>
          <Card.Text>
            Hello thank you for using the employee directory. Select "Employee Directory" to find an employee's phone extension. To add an employee, click "Add Employee"
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Homepage;
