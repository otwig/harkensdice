// ------------ Imports ---------------
import React, { useState } from "react";
import BurgerNav from "./BurgerNav";
import BurgerIcon from "./images/burgericon.jpg";
import '../css/Burger.css'
import { Link } from "react-router-dom";


// ------burger component creation
const Burger = () => {
  //-----create a variable, a toggle, and set the state of the variable to false
  const [modal, setModal] = useState(false);
  //function that will toggle the variable on and off
  const handleModal = () => {
    setModal(!modal);
  };

  //output:
  //print a div that contains a button that is a hamburger menu icon
  //add commands so that when the button is clicked, the variable will toggle on and off
  //if the variable is true, open the BurgerNav component
  //when the variable is false, close the BurgerNav component
  return (
    <div id="burgerbar">
      <div className="burgerDiv">
        <button id="burger" onClick={handleModal}>
              <img src={BurgerIcon} alt=""/>
        </button>

        {modal && <BurgerNav
        handleModal={handleModal} />}
      </div>
    </div>
  );
};

//------export the component---------
export default Burger;
