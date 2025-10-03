console.log("Video 67: Lab 05");

const tableUser = document.querySelector("#users tbody");

const getUser = fetch("http://localhost:8000/users").then((res) => res.json());

const display = async () => {
    const users = await getUser;
    if (users && users.length) {
        users.forEach((user) => {
            tableUser.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>`;
        });
    }
};

display();
