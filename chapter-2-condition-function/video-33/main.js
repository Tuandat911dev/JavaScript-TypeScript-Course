console.log("Video 33");

/*
scope là phạm vị truy cập của biến
- có 3 loại phạm vi chính
+ Global scope
+ Function scope
+ Block scope
*/

// global scope
let globalVar = "Tôi là biến toàn cục";
function show() {
    console.log(globalVar); // Truy cập được
    globalVar = "Hello";
}
show();
console.log(globalVar); // Truy cập được

// function scope
function sayHi() {
    let name1 = "hoidanit";
    console.log("Hi " + name1);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
    }

    console.log(x); // ❌ Lỗi: x is not defined
}

sayHi();
console.log(name1); // ❌ Lỗi: name1 is not defined

// block scope
