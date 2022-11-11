import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [count,setCount] = useState(0);
  const [stuff,setStuff] = useState([]);

  function handleCount(val,name) {
    setCount(count + val);
    if (!stuff.includes(name)) {
      setStuff(old => [...old, name]);
    }
  }


  return (
    <div className="App">
      <h1 >My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addCounter={handleCount}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Total price: ${count}</h2>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {stuff.map((item) => ( // TODO: map bakeryData to BakeryItem components
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
