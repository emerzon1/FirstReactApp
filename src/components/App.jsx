import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  if(document.cookie.length === 0){
    document.cookie = "u=[]"
  }
  let res;
  if(document.cookie ==='u=[]' || document.cookie==="u="){
    res = [];
  }
  else{
    res = ([...document.cookie.substring(2).split(',')])
  }
  const [items, setItems] = useState(res);

  function addItem(inputText) {
    
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    document.cookie = ("u=" + items+ "; expires=Fri, 5 Oct 2028 14:28:00 GMT");
  }

  function deleteItem(id) {
    
    setItems(prevItems => {

      let newThing = prevItems.filter((item, index) => {
        return index !== id;
      });
      document.cookie = ("u=" + newThing + "; expires=Fri, 5 Oct 2028 14:28:00 GMT");
      return newThing;
    });
    document.cookie = ("u=" + items + "; expires=Fri, 5 Oct 2028 14:28:00 GMT");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => { document.cookie="u=" + items + "; expires=Fri, 5 Oct 2028 14:28:00 GMT";
            return (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          )})}
        </ul>
      </div>
    </div>
  );
}

export default App;

