import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    const handleInput = e => {
        const value = e.target.value
        dispatch(filterContacts(value))

    };
    return (
        <>

            <p>Find contacts by name</p>
            <label htmlFor="filter" className="form-label">Name</label>
            <input
                onChange={handleInput}
                value={filter}

                id="filter"
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />

        </>

    )
}