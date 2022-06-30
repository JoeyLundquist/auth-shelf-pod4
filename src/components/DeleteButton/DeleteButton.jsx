import { useDispatch } from 'react-redux' 
import { useSelector } from ''

function DeleteButton( {id} ){
    const dispatch = useDispatch();
    let user = useSelector(store => store.user)
    const handleClick = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }
    return(
        <>
        if(user_id == id){
            <button onClick={handleClick}>DELETE </button>
        }
        </>
    )
}

export default DeleteButton