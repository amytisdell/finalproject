
import DirectoryItem from "./DirectoryItem";



function DirectoryList(props) {
  return (
    <ul /*className={classes.list}*/>
      {props.entries.map((employee,i) => (
        <DirectoryItem 
        key={i}
        id={employee.id}
        name={employee.name}
        extension={employee.extension} />
      ))}
    </ul>
  );
}

export default DirectoryList;
