import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const info = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [initialInfo, setInitialInfo] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return info;
  });

  const [filteredInfo, setFilteredInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(initialInfo));
  }, [initialInfo]);

  useEffect(() => {
    setFilteredInfo(
      initialInfo.filter((contact) =>
        contact.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [initialInfo, inputValue]);

  const handleSubmit = (values, actions) => {
    const newInfo = [...initialInfo, values];
    setInitialInfo(newInfo);
    actions.resetForm();
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setInputValue(value);
  };

  const deleteItem = (contactId) => {
    const newInfo = initialInfo.filter((contact) => contact.id !== contactId);
    setInitialInfo(newInfo);
  };

  return (
    <div className={"container"}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList info={filteredInfo} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
