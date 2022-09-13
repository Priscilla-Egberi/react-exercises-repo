import React from "react";

function ContactCard(props){
    return(
<div className="card inline-block">
            <h1>{props.name}</h1>
            <img src={props.img} alt="pic"/>
            <p>{props.email}</p>
            <p>{props.tel}</p>
    </div>
    )
};

export default ContactCard;