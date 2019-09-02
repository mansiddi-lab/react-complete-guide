import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockPit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[CockPit.js] useEffect render');
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })

    console.log('[CockPit.js] cockPit render');

    const assignedClasses = [];
    let btnClasses = '';
    // btnClasses = classes.red;
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClasses}
                onClick={props.clicked}>Toggle Person </button>
            <button onClick={authContext.login}>Login</button>
        </div>
    )
}

export default React.memo(cockPit);