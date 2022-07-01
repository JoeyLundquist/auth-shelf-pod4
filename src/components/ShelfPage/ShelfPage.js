
import React from 'react';
import ShelfForm from '../ShelfForm/ShelfForm';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';

//deconstructing saga (from the app.jsx) we are reusing one component because we are displaying items but we are doing them for the entire shelf but also have the option for one user - hence having a The Shelf and a My shelf page
function ShelfPage({saga}) {
  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);
  console.log('this is shelf', shelf)

  useEffect(() => {
    console.log(`In useEffect ShelfPage`);
    // the switch is happening in the dispatch that saga from the app jsx switches because of the if / else of FETCH_SHELF 
    dispatch({
      type: saga
    })
  }, [])
  function title(saga){
    if(saga === "FETCH_SHELF"){
      return (
        <>
          <h2>Shelf</h2>
          <p>All of the available items can be seen here.</p>
        </>
      )
    } else {
      return (
        <>
        <h2>My Shelf</h2>
        <p>HEY! look at all my stuff!</p>
        </>
      )
    }
  }

  return (
    <div className="container">
      {title}

      <ShelfForm />

      <ul>
        {shelf.map(item => {
          return (
              <li key={item.id}>
                {item.description}
                <img src={item.image_url} />
                {/* sending down the userId to make a cleaner delete button component */}
                <DeleteButton userId={item.user_id} itemId={item.id}/>
              </li>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
