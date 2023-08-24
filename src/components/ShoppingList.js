import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchValue) {
    setSearchTerm(searchValue);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase()); // Check for full match
    }
    return (
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check for full match
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        search={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}



export default ShoppingList;

