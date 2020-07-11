window.setTimeout(function () {
    var todos = ["Buy New Turtle"];

    var input = prompt("What would you like to do?")



    while (input !== "quit") {

        if (input === "list") {
            console.log("**********");
            todos.forEach(function (todo, i) {
                console.log(i + ": " + todo);
            });
            console.log("**********");
        } else if (input === "new") {
            var newTodo = prompt("Enter new todo");

            todos.push(newTodo);
            console.log("Added Todo");
        } else if (input === "delete") {
            // ask for the index
            var index = prompt("Enter index of the todo to delete");
            // delete that todo
            // splice()
            todos.splice(index, 1);
            console.log("Deleted Todo");
        }
        //ask again for new input
        input = prompt("What would you like to do now?");
        // console.log(todos);
    }
    console.log("OK, you quit the app");
}, 500);

// this is the color of comments