import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState(''); // using a hook to capture the value of the user input 
    
    const onSubmit = (e) => {
        e.preventDefault(); // preventing the default reload of the form
        if (!location || location === '') return; // if we don't have a location or the input is an empty string - return = end function
        submitSearch(location); // calling submitSearch passing location which holds the value of the user input
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location} // adding a value to the form and passing the variable location to capture the value 
                onChange={e => setLocation(e.target.value)} // taking the event (e) that the onChange gives us and call setLocation - passing e.target.value to extract the input value (user input in the form)
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}
export default Form;
