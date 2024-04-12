import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./component/Container";

function App() {
   let vegItems = ["Tomato", "Cauli", "Potato", "lentils", " Onion"];
 
   //below we have conditional randering
  //passing data via props

  return (
<Container>
<div className="container">
        <h2 style={{ textAlign: "center" }}>Healthy Vegetables </h2>
        <ErrorMessage items = {vegItems}></ErrorMessage>
        <FoodItems items = {vegItems}></FoodItems>
      </div>


</Container>
     
  );
}

export default App;
