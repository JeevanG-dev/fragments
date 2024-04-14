import Item from "./Item";
import { useState } from "react";
function FoodItems({ items }) {
  let [activeItems,setActiveItems] = useState([]);

  function onBuyButton (item,event){
let newItems = [...activeItems, item];
setActiveItems(newItems)
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} VegItem={item} buy={activeItems.includes(item)} handleBuyButton={(event) => onBuyButton(item,event)}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
