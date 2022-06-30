
import React from 'react';
import ShelfForm from '../ShelfForm/ShelfForm';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);
  console.log('this is shelf', shelf)

  useEffect(() => {
    console.log(`In useEffect ShelfPage`);
    dispatch({
      type: 'FETCH_SHELF'
    })
  }, [])

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

      <ShelfForm />

      <ul>
        {shelf.map(item => {
          return (
              <li key={item.id}>{item.description}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
