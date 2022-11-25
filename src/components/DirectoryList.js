/*Note: Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags.
For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
To learn more about the reasoning behind this convention, please read JSX In Depth.*/

//entries = directories
import DirectoryItem from "./DirectoryItem";

function DirectoryList(props) {
  return (
    <ul /*className={classes.list}*/>
      {props.entries.map((employee) => (
        <DirectoryItem 
        key={employee.id}
        name={employee.name}
        extension={employee.extension} />
      ))}
    </ul>
  );
}

export default DirectoryList;
