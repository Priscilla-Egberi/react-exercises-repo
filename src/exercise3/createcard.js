import React from "react"
import MyContacts from "./MyContacts"

function CreateCard(contact){
    return(
        <MyContacts
            name={contact.name}
            img ={contact.imgURL}
            email={contact.email}
            tel ={contact.phone}
        />
    )}

export default CreateCard;