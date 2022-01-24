import React from "react"
import menu from '../data/burgerqueen.json'

const Hamburgers = () => {
  
  const hamburger = menu.hamburger


  return (
    <>
      {hamburger.map((item)=>{
        return(
          <div>
            <button key={item.id}></button>
            <section>{item.name}</section>
            <section>${item.price}</section>
          </div>
          
        )
      })}
    </>
    )
};

export { Hamburgers };
