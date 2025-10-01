console.log("Video 54: Alert");

/*
- alert() là một trong những build in function trong JS dùng để hiển thị popup đơn giản
*/

const element = document.getElementById("login");

element.addEventListener("click", () => {
    alert("Logged in");
});
