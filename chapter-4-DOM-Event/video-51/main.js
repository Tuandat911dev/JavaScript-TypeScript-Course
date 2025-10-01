console.log("Video 51: Lắng nghe sự kiện với addEventListener");

/*
- addEventListener là method dùng để gắn sự kiện vào các Element
- Khi sự kiện xảy ra, trình duyệt sẽ gọi các hạm được chỉ định
- Cú pháp: element.addEventListener("event name", function)
*/

const element = document.getElementById("btn");

console.log(element);

element.addEventListener("click", () => {
    alert("You click a button");
});
