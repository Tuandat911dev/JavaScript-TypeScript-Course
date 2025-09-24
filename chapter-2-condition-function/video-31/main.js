console.log("Video 31");

/*
arrow function là hàm ẩn danh - nó khôgn có tên, lên nếu muốn kiểm soát
thực thi của nó thì lên gán nó cho bmootj biến
 */

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 5));

// IIFE -  Immediately Invoked Function Expression
(function () {
    console.log("IIFE");
})();

const calculateSum = (a, b) => {
    return a + b;
}

console.log(calculateSum(9, 9));
