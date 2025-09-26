console.log("Video 40: Biến đổi mảng với map");

/*
- map(): dùng để duyệt qua từng phần tử trong mảng => tạo ra mảng mới
- map không làm thay đổi giá trị của mảng ban đầu
- map tạo ra một array mới lên cần một biến để hứng result
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach((number) => {
    console.log(number);
});

const newArr = numbers.map((number) => {
    return number * 2;
});

const arr = numbers.map((number) => number * 2);

newArr.forEach((item) => {
    console.log(item);
});
