import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import SubtaskList from "./components/SubtaskList.js";
import {Col} from 'react-bootstrap';

class App extends React.Component {

  render() {

    return (
        <div>

          <Header />

            <Col md={4}>
                <TaskList />
            </Col>
            <Col md={8}>
                <SubtaskList />
            </Col>

        </div>
    );
  }
}

export default App;
