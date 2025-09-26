console.log("Video 39: Duyệt mảng với foreach");

/*
- cú pháp: array.foreach(callback function)
*/

const fruits = ["banana", "apple", "orange", "mango"];

console.log("Chiều dài mảng: " + fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// foreach
fruits.forEach((item, index) => {
    console.log(`${[index]} = ${item}`);
});
