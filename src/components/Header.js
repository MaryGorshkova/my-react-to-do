import React from 'react';
import {Checkbox, Col, Form, FormControl, FormGroup, PageHeader, Row} from 'react-bootstrap';

class Header extends React.Component {
    render(){
        return (
            <Row>
                <Col lg={8}>
                    <PageHeader>To-Do List
                    </PageHeader>
                </Col>
                <Col lg={4}>
                    <Form inline>
                        <FormGroup>
                            <Checkbox inline>Show active</Checkbox>
                            <FormControl type="search" name="search" placeholder="Type here to search.."/>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Header;