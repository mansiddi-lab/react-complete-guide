import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    //This can be used in only class based component and in the same way
    //It will gives the context
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log('componentDidMount ::: ' + this.context.authenticated);
    }

    render() {
        console.log('[Person.js] persons rendering');
        return (
            /*<div className={classes.Person} >*/
            // <Fragment>
            <Aux>
                {this.context.authenticated ? (<p>Authenticated</p>) : (<p>Please log in</p>)}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    //ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />

            </Aux>
            // </Fragment>
            /*</div>*/
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.node,
    changed: PropTypes.func
}
export default withClass(Person, classes.Person);