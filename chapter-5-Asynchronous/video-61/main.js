console.log("Video 61: Asynchronous");

/**
- Khi có nhiều chương trình phụ thuộc vào nhau cần phải chờ chương trình kia
hoàn thành xong
- Vì vậy sử dụng asynchronous chỉ là tương đối
 */

console.log(1);

setTimeout(() => {
    console.log(2);
}, 2 * 1000);

console.log(3);
