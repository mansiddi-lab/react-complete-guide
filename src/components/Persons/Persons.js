import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    // componentWillUpdate() {
    //     console.log('[Persons.js] componentWillUpdate');
    // }

    // This is now implemented by PureComponent
    // shouldComponentUpdate(nextProps, nextstate) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' };
    }

    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log('snapshot::::', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    render() {
        console.log('[Persons.js] persons render');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    click={() => this.props.clicked(index)} />
            );
        });
    }
}

export default Persons;