import React from "react";
import "./style.css";
import emojiEndpoint from "./emojiEndpoint.js";
import CreateEmojiCard from "./createEmojiCard"

function Emojipedia() {
  return (
    <div>
      <h1 class="head">
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
      {emojiEndpoint.map(CreateEmojiCard)}
        
      </dl>
    </div>
  );
}

export default Emojipedia;
