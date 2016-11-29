import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import SubtaskList from "./components/SubtaskList.js";
import {TaskListData} from "./data/tasks.js";
import {Col} from 'react-bootstrap';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentTask: TaskListData[0]
        };
        this.selectTask = this.selectTask.bind(this);
    }

    selectTask(e, child){
        console.log(e.target);
        console.log(child);
        this.setState({
            currentTask: e.target
        })
    }

  render() {

    return (
        <div>

          <Header />

            <Col md={4}>
                <TaskList currentTask={this.state.currentTask} selectTask={this.selectTask }/>
            </Col>
            <Col md={8}>
                <SubtaskList currentTask={this.state.currentTask}/>
            </Col>

        </div>
    );
  }
}

export default App;
