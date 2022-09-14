import React from "react";

function ContactCard(me){
    return(
<div className="card inline-block">
            <h1>{me.name}</h1>
            <img src={me.img} alt="pic"/>
            <p>{me.email}</p>
            <p>{me.tel}</p>
    </div>
    )
};

export default ContactCard;