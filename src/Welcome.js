import React from 'react';

/*
// as function
function Welcome (props) {
    return <h1>Hello, {props.name}</h1>;
}
*/

/*
// as arrow function
const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
}
 */

/*
// if only return [without {}]
const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// good tone is ()
const Welcome = (props) => (
    <h1>Hello, {props.name}</h1>;
);
*/

/*
// for SIMPLE COMPONENTS WITN ONLY *RETURN*
// WE WILL USE *ARROW FUNCTIONS*
// + destructuring
const Welcome = ({ name }) => (
    <h1>Hello, {name}</h1>
);
*/

// *classes* are syntax sugar for functions
// WE WILL USE IT FOR DIFFICULT COMPONENTS
class Welcome extends React.Component {
    render() {
        // name - argument
        // children - child element
        const { name, children } = this.props;
        return <h1>Hello, { children }!</h1>;
    }
}

export default Welcome;