// Render the datatable
$('#my-table').DataTable({
    data: DataSource.getData(),
    columns: [
        { title: "Name", data: "name" },
        { title: "Position", data: "position" },
        { title: "Office", data: "office" },
        { title: "Age", data: "age" },
        { title: "Start Date", data: "start-date" },
        { title: "Salary", data: "salary" }
    ]
});