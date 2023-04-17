import { ContactForm } from "./Forms/FormsFone";
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts"

export const App = () => {
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
      <ContactForm />
      <Filter />
      <Contacts />
    </div>
  )
}


