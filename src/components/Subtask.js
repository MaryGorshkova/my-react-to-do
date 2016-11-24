import React from "react";
import {Checkbox, ListGroupItem} from 'react-bootstrap';

class Subtask extends React.Component {

    render(){
        return (
            <ListGroupItem key={this.props.item.Key}>
                <Checkbox inline>
                    {this.props.item.Name}
                </Checkbox>
            </ListGroupItem>
        )
    }
}

export default Subtask;