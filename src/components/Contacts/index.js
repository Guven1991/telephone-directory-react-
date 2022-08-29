import {useState,useEffect} from 'react'
import List from './List';
import Form from './Form';
import "./styles.css";

function Contacts() {
    const [contacts,setContacts]= useState([
        {
            fullname:'Ali Ayvazoğlu',
            phone_number:'05837621122'
        },
        {
            fullname:'Güven Ayvazoğlu',
            phone_number:'05447621122'
        },{
            fullname:'Mehmet Mert',
            phone_number:'05441121122'
        }
    ]);

useEffect(() =>{
console.log(contacts);
},[contacts])


;  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact ={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;
