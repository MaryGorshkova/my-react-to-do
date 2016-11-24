import React from 'react';
import {Button, ButtonGroup,
    Glyphicon,
    ListGroup, ListGroupItem} from 'react-bootstrap';

class Task extends React.Component {

    render(){
        return (
            <ListGroupItem>
                {this.props.item.Name}
                <ButtonGroup className="pull-right">
                    <Button><Glyphicon glyph="trash"/></Button>
                    <Button><Glyphicon glyph="plus"/></Button>
                </ButtonGroup>

                <ListGroup>
                    {(this.props.item.Childs
                    ? this.props.item.Childs.map(elem => <Task key={elem.Key} item={elem} />)
                    : null)}
                </ListGroup>

            </ListGroupItem>
        )
    }
}

export default Task;