import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css'
import { deleteContact } from 'redux/contactsSlice';
export const Contacts = () => {
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

    const listItems = foundedName(filter, contacts).map((contact) => {

        return (< li className={css.item} key={contact.id}>{contact.name}: {contact.number}<button className={css.btn} onClick={() => {
            contactDelet(contact.id)

        }}>
            Delete
        </button></li>)
    });

    return (
        <ul>
            {listItems}
        </ul>
    )
}