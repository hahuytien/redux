import React from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import {searchTodo} from  './../actions'
import { useState } from 'react';
import Task from './../mocks/Task';


function Search(props) {
  const items = Task;
  let itemsCurent = [];

  const dispatch = useDispatch();
  let [search, setSearch] = useState('');
 


  function handlegetValueSearch(event) {
    search = event.target.value;
  }


  function handleSearch() {
    setSearch(search);

    if(search.length > 0) {
      itemsCurent = [];
      items.forEach((item) =>{
        if(item.name.toLowerCase().indexOf(search.trim()) != -1) {
          itemsCurent.push(item);
        }
      })
    } else {
      itemsCurent = [...items];
    }

    //console.log(itemsCurent);
    const actionSearch = searchTodo(search, itemsCurent);
    dispatch(actionSearch);
  }


  return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input  onChange={handlegetValueSearch} type="text" useRef='name' className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button onClick={handleSearch} className="btn btn-info" type="button">Goooooooo!</button>
          </span>
        </div>
      </div>
  );
}

export default Search;
