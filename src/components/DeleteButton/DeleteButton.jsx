import { useDispatch, useSelector } from 'react-redux' 


function DeleteButton({userId, itemId}){
    const dispatch = useDispatch();
    let user = useSelector(store => store.user)
    const handleClick = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {id : itemId}
        })
    }

function deleteRender(a,b) {
    if(a === b) {
        return (
            <button onClick={handleClick}>DELETE</button>
        )
    }
}
    return(
        <div>
        {deleteRender(user.id, userId)}
        </div>
    )
}

export default DeleteButton