console.log("Video 43: Thao tác với object");

/*

*/

// key: value
const sv1 = {
    score: 10,
    name: "Meisei",
    address: {
        city: "Hanoi",
        country: "Vietnam",
    },
};

const sv2 = {
    score: 10,
    name: "Onosato",
    address: {
        city: "Tokyo",
        country: "Japan",
    },
};

console.log("score", sv1.score);
sv1.score = 9.5;
console.log("After");
console.log("score", sv1["score"]);

const students = [sv1, sv2];

// Delete thuộc tính trong object
delete sv1.address;
console.log(sv1);


