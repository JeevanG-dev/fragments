import FoodItems from "./component/FoodItems";
import Foodinput from "./component/Foodinput";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./component/Container";
import { useState } from "react";

function App() {
  let [vegItems, setVegItems] = useState([
    
  ]);

  const keyDown = (event) => {
    if (event.key === "Enter") {
      let newVegItems = event.target.value;

      let newItems = [...vegItems, newVegItems];
      setVegItems(newItems);
    }
  };

  return (
    <Container>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Things To Buy </h2>
       
        <Foodinput handleKeyDown={keyDown}></Foodinput>
        <ErrorMessage items={vegItems}></ErrorMessage>

        <FoodItems items={vegItems}></FoodItems>
      </div>
    </Container>
  );
}

export default App;
