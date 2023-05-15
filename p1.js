var start = prompt("Would you like to start web Application y/n ?: ");
var students = [];
function addStudent() {
    var name = prompt("What name would like to insert:");
    students.push(name);
    console.log(students);
    alert("Student is added");
}
function display() {
    console.log(students);
    alert(students);
}
function removeStudent() {
    var stduentname = prompt("What name would u like to delete:?")
    var index = students.indexOf(stduentname);
    students.splice(index, 1)
    console.log(students);
    alert("Student is deleted")

}

if (start === 'y') {
    while (request !== 'exit') {
        var request = prompt("Please select an acton:add,remove,display or exit");

        if (request === 'add') {
            addStudent();
        }
        else if (request === 'remove') {
            removeStudent();
        }
        else if (request === 'display') {
            display();
        }
    }

}

alert("Thanks for using the web application, please refresh to start again")
