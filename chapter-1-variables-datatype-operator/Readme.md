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

## 3. Kiều dữ liệu tham chiếu (Objet Data types)
- Kiều dữ liệu tham chiếu dữ liệu không lưu trực tiếp trong bộ nhớ stack, nó chỉ lưu địa chỉ tham chiếu đến đối tượng thực sự đang được nằm trong bộ nhớ heap.

- Các kiểu dữ liêu object trong js: Object, Array, Function, Date, RegExp, Map, Set

## 4. Toán tử trong JS
- a. Toán tử số học (Arithmetic Operators)
> b = a++ : gán a cho b xong mới tăng lên 1 đơn vị
> b = ++a : tăng a lên một đơn vị sau đó mới gán cho b

- b. Toán tử so sánh (Comparison Operators)
> ==: so sánh bằng (lỏng) - chỉ so sánh giá trị
> ===: so sánh bằng (chặt) - so sánh cả giá trị và kiểu dữ liệu
> != và !== tương tự

- c. Toán tử logic (|| &&)

## 5. Template String
- *Template String* (còn gọi là Template Literals) là cách khai báo chuỗi bằng dấu backtick