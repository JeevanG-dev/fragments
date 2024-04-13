import css from "./Item.module.css";

function Item({ VegItem}) {

 

  return (
    <li className="list-group-item">
      {VegItem}
      <button
        className={`${css.button} btn btn-success`}
     
      >
        buy
      </button>
      
    </li>
  );
}
export default Item;
