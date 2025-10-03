console.log("Video 65: Callback");

/**
- callback là một hàm được truyền vào như một đối số cho một hàm khác

- Callback thường được dùng trong các tác vụ bất đồng bộ (asynchronous) như:
  + Đọc file
  + Gọi API
  + Chờ đợi sự kiện

- Promise có thể khắc phục callback hell
 */

const callbackFunc = (name, callback) => {
    console.log(callback(name));
};

const greet = (name) => {
    return "Hello " + name;
};

const develop = (name) => {
    return name + " is Software Engineer";
};

callbackFunc("Doraemon", greet);
callbackFunc("Doraemon", develop);
