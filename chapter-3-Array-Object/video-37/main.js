console.log("Video 37: Giới thiệu về Array");

/*
- Mảng là một kiểu dữ liệu đặc biệt trong JS
- Mảng cho phép lưu nhiều giá trị trong một biến duy nhất
- Khác với các ngôn ngữ lập trình khác, mảng trong JS chỉ lưu trữ reference đến các giá trị
- Có thể lưu trữ nhiều kiểu dữ liệu khác nhau trong cùng một mảng (string, number, boolean, Array, Object)
- Các item có kiểu dữ liệu là primitive data type sẽ được lưu trực tiếp trên Heap
- Các item là reference data type như object, array sẽ lưu tham chiếu đến giá trị của nó
- Trong js không cần định nghĩa trước số phần tử trong mảng
*/

const newArr = [
    {
        name: "Tom",
        age: 19
    },
    [1, 2, 3, 4],
    "Apple",
    9,
    true,
    null,
    undefined
]

// console.log(newArr);

newArr.forEach((item) => {
    console.log(item);
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((item) => {
    if(item % 2 == 0) {
        console.log(item);
    }
})