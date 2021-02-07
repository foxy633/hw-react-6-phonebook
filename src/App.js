import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Container from "./components/Container";

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";
// import ContactForm from "./components/ContactForm";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     try {
//       const contacts = localStorage.getItem("contacts");
//       if (contacts) {
//         const parseContacts = JSON.parse(contacts);

//         this.setState({ contacts: parseContacts });
//       }
//     } catch (e) {
//       console.log("error occurred");
//       console.log(e);
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (item) => {
//     const searchSameName = this.state.contacts
//       .map((cont) => cont.name)
//       .includes(item.name);
//     if (searchSameName) {
//       alert(`${item.name} is already in contacts`);
//     } else if (item.name.length === 0 || item.number.length === 0) {
//       alert("Fields must be filled!");
//     } else {
//       const contact = { id: uuidv4(), ...item };
//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     }
//   };

//   changeFilter = (filter) => {
//     this.setState({ filter });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   removeContact = (contactId) => {
//     this.setState((prevState) => {
//       return {
//         contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChangeFilter={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onRemoveContact={this.removeContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
