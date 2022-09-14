import React from "react"
import EmojiCard from "./EmojiCard"

function CreateEmojiCard(detail){
    return(
        <EmojiCard
            key ={detail.id}
            name={detail.name}
            emoji={detail.emoji}
            meaning={detail.meaning}
        />
    )
}

export default CreateEmojiCard;