console.log("Video 55: Local Storage");

/*
- local storage là một phần của Web Storage API, cho phép lưu trũ
dữ liệu ngay trên browser
- Dữ liệu được lưu trữ dưới dạng key - value
- Dữ liệu không bị mất khi reload hoặc tắt trình duyệt

- Cú pháp
  + localStorage.setItem(key, value) Lưu dữ liệu (value phải là chuỗi)

  + localStorage.getItem(key) Lấy dữ liệu theo key

  + localStorage.removeItem(key) Xóa dữ liệu theo key

  + localStorage.clear() Xóa toàn bộ dữ liệu đã lưu trong Local Storage

- Do local storage chỉ lưu trữ value dạng String, trong thực tế thì hay lưu trữ cả object
vì vậy sinh ra hai method
  + JSON.stringify(object) convert object to string
  + JSON.parse(String) convert string to object
*/

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const prevName = localStorage.getItem("name");

if (prevName) {
    document.getElementById("message").innerHTML = `<b>${prevName}</b>`;
}

btn.addEventListener("click", () => {
    localStorage.setItem("name", input.value);
    console.log(localStorage.getItem("name"));
    document.getElementById("message").innerHTML = `<b>${localStorage.getItem(
        "name"
    )}</b>`;
});
