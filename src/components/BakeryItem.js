// TODO: create a component that displays a single bakery item
import "../App.css";
import App from "../App";
import { useState } from "react";
import "./BakeryItem.css";

function BakeryItem({item, addCounter}) {
    return (
        <div class="bakeItem">
            <img src={item.image} width="30%"/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => addCounter(item.price,item.name)}> Add </button>
        </div> 
    );
}

export default BakeryItem;