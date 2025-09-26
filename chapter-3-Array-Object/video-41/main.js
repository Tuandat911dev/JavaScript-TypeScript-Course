console.log("Video 41: Lọc phần tử trong array với filter");

/*
- filter(): Phương thức cho phép lọc các giá trị trong mảng thoả mãn điều kiện
- filter() không làm thay đổi các phần tử trong mảng
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array = numbers.filter((number) => {
    return number % 2 == 0;
});

array.forEach((item) => {
    console.log(item);
});