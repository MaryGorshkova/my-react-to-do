const SubTaskListData = [
    {Key: "0", Name:"Task 0"},
    {Key: "1", Name:"Task 1"},
    {Key: "2", Name:"Task 2"},
    {Key: "3", Name:"Task 3"}
];

const TaskListData = [
    {Key: "00", Name: "00"},
    {Key: "01", Name: "01", Childs: [{Key: "10", Name: "10"}, {Key: "11", Name: "11", Childs: [ {Key: "20", Name: "21"} ]}]},
    {Key: "02", Name: "02"}
];

export { SubTaskListData, TaskListData };