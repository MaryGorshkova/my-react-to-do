import React from "react";
import Subtask from "./Subtask.js";
import {Button, ControlLabel,
    Form, FormControl, FormGroup,
    ListGroup, ListGroupItem} from 'react-bootstrap';

class SubtaskList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            subtasks: list
        };
    }

    render(){
        return (
            <div>

                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder="New Subtask"/>
                        <Button>Add</Button>
                    </FormGroup>
                </Form>

                <ListGroup>
                    {this.state.subtasks.map((elem, index) => <Subtask key={index} item={elem} />)}
                </ListGroup>

            </div>
        )
    }
}

const list = [
    {Key: "0", Name:"Task 0"},
    {Key: "1", Name:"Task 1"},
    {Key: "2", Name:"Task 2"},
    {Key: "3", Name:"Task 3"}
];


export default SubtaskList;