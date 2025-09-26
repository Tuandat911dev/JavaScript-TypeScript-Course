console.log("Video 44: Lặp object sử dụng for...in và for...of");

/*
- for in: lặp qua key
- for of: lặp qua value

Cú pháp:
for (let key in object) {
  console.log(key, object[key]);
}

for (let value of iterable) {
  console.log(value);
}
*/

const sv1 = {
    name: "Onosato",
    age: 20,
};

const sv2 = {
    name: "Hoshoryu",
    age: 21,
};

const sv3 = {
    name: "Kotazakura",
    age: 22,
};

const sinhvien = [sv1, sv2, sv3];

// sinhvien.forEach((item) => {
//     console.log(item.name);
// });

const person = {
    email: "abc@gmail.com",
    age: 19,
    address: "Hanoi",
};

for (let key in person) {
    console.log(key, person[key]);
}

for (let value of Object.values(person)) {
    console.log(value);
}

for(let [key, value] of Object.entries(person)) {
    console.log(key, value);
}
