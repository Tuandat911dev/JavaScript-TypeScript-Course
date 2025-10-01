console.log("Video 52: Thay đổi nội dung của HTMl");

/*
- Cú pháp: element.method
- Một số method tương tác với html
  + innerText: Lấy hoặc thay đổi content của phần tử html
  + innerHtml: Lấy hoặc thay đổi cấu trúc html, innerHtml chỉ có thể change HTML
*/

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const changeHtmlBtnElement = document.getElementById("changeHtmlBtn");

const myContentElement = document.getElementById("content");

myBtnElement.addEventListener("click", () => {
    console.log("You click my button");
    myContentElement.innerText = "Hello JavaScript";
});

backBtnElement.addEventListener("click", () => {
    myContentElement.innerText = "Hello World";
});

changeHtmlBtnElement.addEventListener("click", () => {
    myContentElement.innerHTML =
        "<p>Hello World, Welcome to my course, This is <strong>JavaScript Course</strong></p>";
});
