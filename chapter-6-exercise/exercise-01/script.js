const tbody = document.querySelector("table tbody");

let todos = localStorage.getItem("todos");

if (todos) {
    todos = JSON.parse(todos);
    let id = 0;
    todos.forEach((todo) => {
        id++;
        tbody.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${todo.name}</td>
            <td><button class="delete-btn" data-id="${todo.id}">Xóa</button></td>
        </tr>
        `;
    });

    const deleteBtn = document.querySelectorAll("button.delete-btn");
    deleteBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (confirm("Bạn có chắc muốn xoá không")) {
                handleDelete(+btn.getAttribute("data-id"));
                window.location.href = "todo.html";
            }
        });
    });
}

const handleDelete = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
};
