console.log("Video 63: Gọi API với fetch");

/**
- API (Application Programming Interface) là giao diện giúp các ứng dụng giao tiếp với nhau.
- fetch() là một hàm tích hợp sẵn trong JS, dùng để gửi yêu cầu HTTP đến một URL (API).
  + Được giới thiệu từ ES6
  + Trả về Promise
  + Hỗ trợ đầy đủ các phương thức HTTP: GET, POST, PUT, DELETE,...

- Cú pháp:
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Có lỗi xảy ra:", error);
  });

 */

fetch("http://localhost:8000/users")
    .then((response) => response.json()) // response.json => chuyển dữ liệu json sang object
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

const temp = fetch("http://localhost:8000/blogs");

temp.then((response) => response.json()) // return Promise
    .then((data) => console.log(data));
