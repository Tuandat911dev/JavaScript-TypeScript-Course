console.log("Exercise 01");

const input = document.querySelector(".content");
const submit = document.querySelector(".submit-btn");
let todos = localStorage.getItem("todos");

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

submit.addEventListener("click", () => {
    const content = input.value;
    const todo = {
        id: getRandomInt(1, 1000000000),
        name: content,
    };

    if (todos) {
        todos = JSON.parse(todos);
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        window.location.href = "todo.html";
    } else {
        localStorage.setItem("todos", JSON.stringify([todo]));
        window.location.href = "todo.html";
    }
});