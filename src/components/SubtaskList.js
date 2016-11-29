import React from "react";
import Subtask from "./Subtask.js";
import {SubTaskListData} from "./../data/tasks.js";
import {Button,
    Form, FormControl, FormGroup,
    ListGroup} from 'react-bootstrap';

class SubtaskList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            subtasks: SubTaskListData.filter(e => { return e.ParentTask === this.props.currentTask.Key })
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


export default SubtaskList;