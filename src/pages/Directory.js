import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import DirectoryList from "../components/DirectoryList";

function Directory(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDirectory, setLoadedDirectory] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
    "https://635352bea9f3f34c3750caee.mockapi.io/disc/employeeDirectory"
    )
    .then((response) => {
     return response.json();
    })
    .then((data) => {
      const employeesData = [];

      for (const key in data) {
        const employeeData = {
          id: key,
          ...data[key] 
        };
        employeesData.push(employeeData);
      }
      
      setIsLoading(false);
      setLoadedDirectory(employeesData)
    });
  }, 
  
  []);
  
  if (isLoading) {
    return (
      <section>
        <p> loading...</p>
      </section>
    );
  }

  return (
    <section>
      <Card>
        <DirectoryList entries={loadedDirectory} /> 
      </Card>
    </section>
  );
}

export default Directory;
