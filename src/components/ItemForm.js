import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItem, setNewItem] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id <<<<<<< Awesome!!!
    name: '',
    category: 'Produce',
  })
  console.log(newItem.name)
  console.log(newItem.category)


  return (
    <form onSubmit={(event) => onItemFormSubmit(event, newItem)} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={(event) => setNewItem({... newItem, name: event.target.value, id: uuid()})} />
      </label>

      <label>
        Category:
        <select onChange={(event) => setNewItem({... newItem, category: event.target.value, id: uuid()})}  name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
