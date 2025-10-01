console.log("Video 53: Thay đổi CSS bằng JS");

/*
- Cú pháp: element.style.tênThuocTinhCss="Giá trị mới"
- Dùng classList để thêm nhiều css thay vì đổi từng cái một
  + element.classList.add("Ten class");
  + element.classList.remove("Ten class");

- Lưu ý: Tên thuộc tính CSS dạng kebab-case như background-color sẽ được
chuyển sang camelCase trong JavaScript: backgroundColor.
*/

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const myTextElement = document.getElementById("title");

console.log(myBtnElement, backBtnElement, myTextElement);

myBtnElement.addEventListener("click", () => {
    myTextElement.style.color = "#f00";
    myTextElement.style.backgroundColor = "aqua";
    myTextElement.classList.remove("title");
});

backBtnElement.addEventListener("click", () => {
    myTextElement.classList.add("title");
});
