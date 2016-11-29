import React from 'react';
import {Button, ButtonGroup,
    Glyphicon,
    ListGroup, ListGroupItem} from 'react-bootstrap';

const Task = (props) =>
        (
        <div>
            <ListGroupItem>
                {props.item.Name}
                <ButtonGroup className="pull-right">
                    <Button><Glyphicon glyph="trash"/></Button>
                    <Button><Glyphicon glyph="plus"/></Button>
                </ButtonGroup>

                <ListGroup>
                    {(props.item.Childs
                    ? props.item.Childs.map(elem => <Task key={elem.Key} item={elem} />)
                    : null)}
                </ListGroup>

            </ListGroupItem>
        </div>
        );

export default Task;