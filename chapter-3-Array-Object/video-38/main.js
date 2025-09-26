console.log("Video 38: Thao tác với Array");

/*
- Truy cập phần tử của mảng thông qua index (ví dụ: arr[0])
- Thêm phần tử
  + Vào cuối mảng: push()
  + Vào đầu mảng: unshift()

- Xoá phần tử
  + Vào cuối mảng: pop()
  + Vào đầu mảng: shift()

- Truy cập index không tồn tại => undefined
*/

const names = ["Messi", "Ronaldo", "Cavani"];

for(let i = 0; i < names.length; i++) {
    console.log(`names[${i}] = ${names[i]}`);
}


// edit
console.log("Edit");
names[2] = "Salah";

for(let i = 0; i < names.length; i++) {
    console.log(`names[${i}] = ${names[i]}`);
}

// insert
names.push("Cavani");
names.unshift("Tao");

console.log("Insert");
for(let i = 0; i < names.length; i++) {
    console.log(`names[${i}] = ${names[i]}`);
}

// delete
names.pop();
names.shift();

console.log("Delete");
for(let i = 0; i < names.length; i++) {
    console.log(`names[${i}] = ${names[i]}`);
}