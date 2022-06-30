import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ShelfForm = () => {
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                imageUrl,
                description
            }
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Image Url'
            value={imageUrl}
            onChange={e => {setImageUrl(e.target.value)}} />                

            <input
            placeholder='Description'
            value={description}
            onChange={e => {setDescription(e.target.value)}} />                
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default ShelfForm;