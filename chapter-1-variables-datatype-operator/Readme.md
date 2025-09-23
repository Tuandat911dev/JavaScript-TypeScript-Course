# Chapter 1: Biến, Kiểu dữ liệu và Toán tử

## 1. Biến trong JavaScript
- Để khai báo biến trong JS sử dụng cú pháp

```
<Từ khóa> <tên biến> = <giá trị>;
```
- Ví dụ:
```javascript
var name = "Dat";
let age = 20;
const country = "Vietnam";
```
- Từ khoá let, const xuất hiện từ ES6
- Từ khoá const là để khai báo hằng số
- **Note:** Lên sử dụng từ khoá let và const để khai báo biến thay cho var, vì var định nghĩa phạm vi biến lỏng lẻo dẫn đến code dễ bug, khó bảo trì và khó tìm lỗi.


## 2. Kiểu dữ liệu nguyên thủy (Primitive Data Types)
- Có 7 kiểu dữ liệu nguyên thuỷ: Number, String, Boolean, Undefined, Null, BigInt, Symbol
> Symbol - dùng để tạo giá trị duy nhất (ví dụ: id)
> Number - Trong js không phân biệt số nguyên hay số dấu phẩy động, chúng đều là Number
> Undefined - Biến chưa được định nghĩa
> Null - Đã được gán giá trị là null

- Js sẽ dựa vào giá trị được gán để biết kiểu dữ liệu của biến
- Cách kiểm tra kiểu dữ liệu của biến
```javascript
console.log(typeof(10)); //number
console.log(typeof("10")); //string
```