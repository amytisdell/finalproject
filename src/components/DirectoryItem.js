
function DirectoryItem(props) {

    function deleteHandler() {
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
                    
                     console.log(employeeData.id)
                     console.log(employeesData)
                      employeesData.splice(employeeData.id,1);
                      
                    }
        });
    }

    return <li /*className={classes.item}*/>
        <div> 
            <p>Employee Name: {props.name}</p>
            <p>Employee Extension: {props.extension}</p>
            <button onClick={deleteHandler}> Delete </button>

        </div>
        <div /*className={classes.actions}*/>
        </div>
    </li>
}

export default DirectoryItem
