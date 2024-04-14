import css from "./Item.module.css";

function Item({ VegItem,buy,handleBuyButton}) {

 

  return (
    <li className={`list-group-item ${buy && 'active'}`}>
      {VegItem}
      <button
        className={`${css.button} btn btn-success`}
     onClick={handleBuyButton}
      >
        Buy
      </button>
      
    </li>
  );
}
export default Item;
