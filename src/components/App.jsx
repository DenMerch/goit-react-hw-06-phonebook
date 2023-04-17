import { ContactForm } from "./Forms/FormsFone";
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts"
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "redux/contactsSlice";
import { filterContacts } from "redux/filterSlice";

export const App = () => {
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const foundedName = (name, contacts) => {
    return contacts.filter(contact => contact.name.toLowerCase().replace(" ", '')
      .includes(name))
  };
  const contactDelet = id => {
    dispatch(deleteContact(id));

  };
  const handleInput = e => {
    const value = e.target.value
    dispatch(filterContacts(value))

  };
  const handleSubmit = (name, number) => {

    const isNamePresent = contacts.find(el => el.name === name);
    if (isNamePresent) {
      return alert(name)
    } else {
      dispatch(addContact(name, number))

    }

  };
  const alert = (name) => {
    return Notiflix.Notify.failure(`${name} is alredy in contacts`)
  }
  return (
    <div
      style={{
        flexDirection: "column",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm handleSubmit={handleSubmit}

      />
      <Filter filter={filter} input={handleInput} />
      <Contacts
        newContact={foundedName(filter,
          contacts)}
        contactDelet={contactDelet}
      />
    </div>
  )
}


