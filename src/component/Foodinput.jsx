import css from "./Foodinput.module.css"

function Foodinput ({handleKeyDown}){

return <input type="text" placeholder="Enter Food item here" className={css.foodinput} 
onKeyDown={handleKeyDown}/>

}

export default Foodinput