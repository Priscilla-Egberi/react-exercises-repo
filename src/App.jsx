import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import ContactCard from "./ContactCard"
import contact from "./contacts.js"
import ComponentCard from "./ComponentCard"



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
         <h1>USING ARRAY FOR REPEATITIVE COMPONENTS</h1>
         <ContactCard
         name={contact[0].name} 
         img={contact[0].img} 
         email={contact[0].email}  
         tel={contact[0].tel}  />
         <ContactCard
         name={contact[1].name} 
         img={contact[1].img} 
         email={contact[1].email}
         tel={contact[1].tel}  />
  <h1>COMPONENT INSIDE A COMPONENT</h1>
  <ComponentCard
  name="Favor"
  img ="https://picsum.photos/id/237/300/200"
  email="favor.gmail"
  tel="09089908979"
  />

         <Footer />
    </section>
};

export default App;