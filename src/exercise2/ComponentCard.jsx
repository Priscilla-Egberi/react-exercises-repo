import React from "react";
import Detail from "./Details"

function ComponentCard(props){
    return(
      
<div className="card inline-block">
            <h1>{props.name}</h1>
            <img src={props.img} alt="pic"/>
            <Detail detail={props.email} />
            <Detail detail={props.tel} />
            
    </div>
    )
};

export default ComponentCard;