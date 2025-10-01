console.log("Video 56: Bài tập lab 04");

const username = "hoidanit@gmail.com";
const password = "123456";

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", () => {
    if (usernameInput.value !== username) {
        alert("username không tồn tại");
        usernameInput.classList.add("invalid");
    } else if (
        passwordInput.value !== password &&
        usernameInput.value === username
    ) {
        alert("Sai mật khẩu");
        passwordInput.classList.add("invalid");
    } else if (
        passwordInput.value !== password &&
        usernameInput.value !== username
    ) {
        alert("username và password không hợp lệ");
        usernameInput.classList.add("invalid");
        passwordInput.classList.add("invalid");
    } else {
        alert("Đăng nhập thành công");
        usernameInput.classList.remove("invalid");
        passwordInput.classList.remove("invalid");
        window.location.href = "success.html";
    }
});
