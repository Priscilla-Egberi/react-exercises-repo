import React from "react";

const date= new Date();
var year = date.getFullYear();

function Footer(){
    return <footer className="footer">copyright@{year}</footer>
}

export default Footer;