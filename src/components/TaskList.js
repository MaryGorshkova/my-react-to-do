import React from 'react';
import Task from "./Task.js";
import {TaskListData} from "./../data/subtasks.js";
import {Button,
    Form, FormControl, FormGroup,
    ListGroup} from 'react-bootstrap';

class TaskList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: TaskListData
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