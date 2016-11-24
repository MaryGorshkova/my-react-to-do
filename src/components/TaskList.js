import React from 'react';
import Task from "./Task.js";
import {Button, ControlLabel,
    Form, FormControl, FormGroup,
    ListGroup, ListGroupItem} from 'react-bootstrap';

class TaskList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: tree
        };
    }

    render(){
        return (
            <div>

                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder="New Task"/>
                        <Button>Add</Button>
                    </FormGroup>
                </Form>

                <ListGroup>
                    {this.state.tasks.map((elem, index) => <Task key={elem.Key} item={elem}/>)}
                </ListGroup>

            </div>
        );
    }
}

export default TaskList;

const tree = [
    {Key: "00", Name: "00"},
    {Key: "01", Name: "01", Childs: [{Key: "10", Name: "10"}, {Key: "11", Name: "11", Childs: [ {Key: "20", Name: "21"} ]}]},
    {Key: "02", Name: "02"}
];