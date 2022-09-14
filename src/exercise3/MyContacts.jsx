import React from "react";
import Info from "./Info"

function MyContacts(props){
    return(
      
    <div className="card inline-block">
            <h3>This is a reuseable card that has a reuseable compononent inside</h3>
            <h1>{props.name}</h1>
            <img src={props.img} alt="pic"/>
            <Info info={props.email} />
            <Info info={props.tel} />
            
    </div>
    )
};

export default MyContacts;