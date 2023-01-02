import { useState } from 'react';
import contactsData from "./contacts.json"

function App() {

    const [contacts, setContacts] = useState(contactsData.slice(0, 6));
   
    

    const addRandomContact = () => {
      const randomIndex = Math.floor(Math.random() * contactsData.length);
      const randomContact = contactsData[randomIndex];
      setContacts(contacts => [...contacts, randomContact]);
    };
 

    const sortByName = () => {
      const sortedContacts = [...contacts].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setContacts(sortedContacts);
    };
  
    const sortByPopularity = () => {
      const sortedContacts = [...contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      });
      setContacts(sortedContacts);
    };

    const handleDelete = id => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
    };
  
  
    return (
      <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p>No</p>}</td>
                <td><button onClick={() => handleDelete(contact.id)}>
                  Delete
                </button></td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
export default App