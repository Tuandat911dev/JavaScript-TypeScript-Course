const titleInput = document.querySelector("input#title");
const authorInput = document.querySelector("input#author");
const contentInput = document.querySelector("textarea#content");
const form = document.querySelector("#todo-form");
const resetBtn = document.querySelector("button#reset-btn");
const tbody = document.querySelector("tbody#table-body");

// Show data
showData = async () => {
    try {
        const rawResponse = await fetch("http://localhost:8000/blogs");
        const blogs = await rawResponse.json();
        if (blogs && blogs.length) {
            blogs.forEach((blog) => {
                tbody.innerHTML += `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.author}</td>
                        <td class="letter-spacing">${
                            blog.content.length > 200
                                ? blog.content.substring(0, 200) + "..."
                                : blog.content
                        }</td>
                        <td>
                            <button class="delete-btn" data-id="${blog.id}">
                                Xóa
                            </button>
                        </td>
                    </tr>
                `;
            });
        }
    } catch (err) {
        console.log(err);
    }
};

showData().then(() => {
    const deleteBtn = document.querySelectorAll("button.delete-btn");
    deleteBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (confirm("Bạn chắc chắn muốn xoá?")) {
                deleteBlog(+btn.getAttribute("data-id"));
                const row = btn.closest("tr");
                row.remove();
            }
        });
    });
});

// Delete Blog
const deleteBlog = async (id) => {
    const rawResponse = await fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
    });
};

// Insert content
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();

        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, author, content }),
        });

        const result = await rawResponse.json();
        alert(`Đã thêm blog ${result.title}`);
        form.reset();
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${result.id}</td>
            <td>${result.title}</td>
            <td>${result.author}</td>
            <td class="letter-spacing">${
                result.content.length > 200
                    ? result.content.substring(0, 200) + "..."
                    : result.content
            }</td>
            <td>
                <button class="delete-btn" data-id="${result.id}">
                    Xóa
                </button>
            </td>
        `;
        tbody.appendChild(newRow);

        // Gán sự kiện click cho element mới
        let btn = document.querySelector(`[data-id="${result.id}"]`);
        btn.addEventListener("click", () => {
            if (confirm("Bạn chắc chắn muốn xoá?")) {
                deleteBlog(+btn.getAttribute("data-id"));
                const row = btn.closest("tr");
                row.remove();
            }
        });
    } catch (err) {
        console.error("Lỗi khi gửi form:", err);
    }
});

// Reset form
resetBtn.addEventListener("click", () => {
    form.reset();
});
