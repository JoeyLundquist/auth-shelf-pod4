import { useDispatch, useSelector } from 'react-redux' 

// 
function DeleteButton({userId, itemId}){
    const dispatch = useDispatch();
    let user = useSelector(store => store.user)
    const handleClick = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {id : itemId}
            //setting the property key to id to match server param
        })
    }
//now using this if statement to check if the logged in user is the page we are on
// if we are logged in as Amanda, we don't want Amanda to be able to delete Chuck's uploads
function deleteRender(loggedInUser, userItem) {
    if(loggedInUser === userItem) {
        return (
            <button onClick={handleClick}>DELETE</button>
        )
    }
}
    return(
        // This just renders that delete function
        <div>
            {/* the user.id is for who is actually logged in */}
        {deleteRender(user.id, userId)}
        </div>
    )
}

export default DeleteButton