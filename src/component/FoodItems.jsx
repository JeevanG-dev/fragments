import Item from "./Item";

function FoodItems({items}) {

    
  return (
    <ul className="list-group">
      {items.map((item) => (
      
      <Item key ={item}
       VegItem={item}></Item>))}
    </ul>
  );
}

export default FoodItems;
