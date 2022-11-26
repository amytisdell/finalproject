
function DirectoryItem(props) {
           
    return <li /*className={classes.item}*/>
        <div /*className={classes.content}*/> 
            <p>Employee Name: {props.name}</p>
            <p>Employee Extension: {props.extension}</p>
            <button> Delete</button>
        </div>
        <div /*className={classes.actions}*/>
        </div>
    </li>
}

export default DirectoryItem