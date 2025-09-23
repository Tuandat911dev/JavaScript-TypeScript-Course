console.log("Video 21");

console.log("info");
console.warn("warning");
console.error("error");

let name = "hoidanit";
let age = 20;

// Không nên: cộng chuỗi dễ sai
console.log("Name: " + name + ", Age: " + age);

// Nên: dùng dấu phẩy (tự động thêm dấu cách)
console.log("Name:", name, ", Age:", age);

console.log("%cCảnh báo!", "color: red; font-weight: bold; font-size: 50px");
console.log("%cWarning!", "color: yellow; font-weight: bold; font-size: 50px");
