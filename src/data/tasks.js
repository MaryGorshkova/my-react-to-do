const SubTaskListData = [
    {Key: "0", ParentTask: "00", Name:"Task 0", Status: 0, Description: "Some text"},
    {Key: "1", ParentTask: "01", Name:"Task 1", Status: 0, Description: "Some text"},
    {Key: "2", ParentTask: "01", Name:"Task 2", Status: 0, Description: "Some text"},
    {Key: "3", ParentTask: "10", Name:"Task 3", Status: 0, Description: "Some text"}
];

const TaskListData = [
    {Key: "00", Name: "00"},
    {Key: "01", Name: "01",
        Childs: [
            {Key: "10", Name: "10"}, {Key: "11", Name: "11",
                Childs: [ {Key: "20", Name: "21"} ]}
        ]
    },
    {Key: "02", Name: "02"}
];

export { SubTaskListData, TaskListData };