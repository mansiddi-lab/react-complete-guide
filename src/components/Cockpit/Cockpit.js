import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockPit = (props) => {

    useEffect(() => {
        console.log('[CockPit.js] useEffect render');
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
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
            <button className={btnClasses}
                onClick={props.clicked}>Toggle Person </button>
        </div>
    )
}

export default cockPit;