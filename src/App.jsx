import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   let vegItems = ["Tomato", "Cauli", "Potato", "lentils", " Onion"];
 
   //below we have conditional randering
  //passing data via props

  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Healthy Vegetables </h2>
        <ErrorMessage items = {vegItems}></ErrorMessage>
        <FoodItems items = {vegItems}></FoodItems>
      </div>
    </>
  );
}

export default App;
