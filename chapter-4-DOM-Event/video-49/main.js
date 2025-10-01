console.log("Video 49: Truy cập phần tử HTML trong DOM");

/*
- Nhờ có DOM, JS có thể

✅ Truy cập và đọc nội dung của các phần tử HTML

✅ Thay đổi nội dung hoặc thay đổi CSS

✅ Thêm, sửa, xóa phần tử HTML

✅ Lắng nghe sự kiện người dùng: click chuột, nhập dữ liệu, rê chuột, v.v.


- Một số cách để truy cập html

✅ document.getElementById(id)

✅ document.querySelector(selector)

✅ document.querySelectorAll(selector)
*/

// get 1 element theo id
const element = document.getElementById("username");

// get 1 phần tử theo query bất kỳ
const elementClass = document.querySelector(".desc")

// get nhiều phần tử theo query bất kỳ => trả ra một node list
const elementQuery = document.querySelectorAll(".content");