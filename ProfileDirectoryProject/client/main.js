import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import EmployeeList from './components/employees_list'

const App = () => {
    return(
        <div>
            <EmployeeList />
        </div>
    );
};

Meteor.startup(() =>{
    ReactDOM.render(<App />, document.querySelector('.container'));
});
