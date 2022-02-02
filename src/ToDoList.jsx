import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Navbar';
import Legend from './components/Legend';
import ListForm from './components/Create-list';
import ListsContainer from './components/listsContainer';

var ToDoList = function () {
    return (
        <div className="Chill">
            <Header title="Navbar example" link1="News" link2="ToDoLists" />
            <Container>
                <Legend/>
                <ListForm/>
                <ListsContainer/>
            </Container>
        </div>
    )
}

export default ToDoList;