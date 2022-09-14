import React from "react";
import Header from "./exercise1/Header";
import Card from "./exercise1/Card";
import Footer from "./exercise1/Footer";
import ContactCard from "./exercise2/ContactCard";
import contact from "./contacts.js";
import ComponentCard from "./exercise2/ComponentCard";
import contacts from "./contacts.js";
import CreateCard from "./exercise3/createcard";
import Emojipedia from "./exercise4/Emojipedia.jsx"





function App(){
    return <section>
         <Header />
         <Card />

         {/* repeatitive components */}
         <h1>REPEATITIVE COMPONENTS</h1>
         <ContactCard
         name="Favor"
         img ="https://picsum.photos/id/237/300/200"
         email="favor.gmail"
         tel="09089908979"
         />
         <ContactCard
         name='Mr Bean' img="https://picsum.photos/id/234/300/200" 
         email='bean@yahoo.com' tel="888-999-000"  />

         {/* Using array for repeatitive components 
            First we create an array in a different file
            Then we call the value of this array
         */}
         <h1>USING ARRAY FOR REUSEABLE COMPONENTS</h1>
         <ContactCard
         name={contact[0].name} 
         img={contact[0].imgURL} 
         email={contact[0].email}  
         tel={contact[0].phone}  />
         <ContactCard
         name={contact[1].name} 
         img={contact[1].imgURL} 
         email={contact[1].email}
         tel={contact[1].phone}  />
  <h1>COMPONENT INSIDE A COMPONENT</h1>
  <ComponentCard
  name="Favor"
  img ="https://picsum.photos/id/237/300/200"
  email="favor.gmail"
  tel="09089908979"
  />
  
  
<h1>MAPPING COMPONENT INSIDE A COMPONENT</h1>

{contacts.map(CreateCard)}

<h1>MAPPING COMPONENT INSIDE A COMPONENT</h1>
<Emojipedia />
    
    <Footer />
    </section>
};

export default App;