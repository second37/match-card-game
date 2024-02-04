import { useState } from 'react'

export default function Card({ card, index, handleClick }) {

    const cardClassName = card.status ? 'active' : ''
 
    return (
      <span className={`card-img ${card.status}`} onClick={() => handleClick(index)}>
      {console.log(card.status)}
        <img src={card.src} alt={card.name} style={{ height: "3rem", maxWidth: "3rem" }} />
        {/*<card.img size="40" id={card.id} name={card.name} />*/}
      </span>
    );
  }