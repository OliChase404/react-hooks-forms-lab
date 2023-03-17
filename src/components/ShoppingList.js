import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [newItem, setNewItem] = useState({
  //   id: '', // the `uuid` library can be used to generate a unique id <<<<<<< Awesome!!!
  //   name: '',
  //   category: '',
  // })

  function onItemFormSubmit(event, newItem){
    event.preventDefault()
    setItems([...items, newItem])

  }

  function onSearchChange(event){
    setSearch(event.target.value)
  }
  
  console.log(search)
  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsBySearch = items.filter((item) => {
    if(search === ''){
      return true
    } else {return item.name.toLowerCase().includes(search.toLowerCase())}
  })

  let itemsToDisplay = itemsBySearch.filter((item) => {
    if (selectedCategory === "All"){
      return true;
    } else {return item.category === selectedCategory;}

  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onCategoryChange={onCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
