console.log("Video 42: Giới thiệu về Object");

/*
- object là kiểu dữ liệu dùng để lưu trữ dữ liệu có cấu trúc theo định dạng key - value

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

const students = [sv1, sv2];

console.log("Students: ", students);
