

function DirectoryItem(props) {

    return <li /*className={classes.item}*/>
        <div /*className={classes.content}*/> 
            <p>Employee Name: {props.name}</p>
            <p>Employee Extension: {props.extension}</p>
        </div>
        <div /*className={classes.actions}*/>
        <button > Delete</button>
        </div>
    </li>
}

export default DirectoryItem