console.log("Video 26");

//  if/else/else-if
const age = 10;

if (age >= 18) {
    console.log("You're enjoy video");
} else if (age > 100) {
    console.log("You're too old");
} else {
    console.log("You're under 18 years old");
}


// score => A, B, C, D, F. Giỏi, Khá, Trung Bình
let score = 10;
let level;

if(score > 9) {
    level = "Giỏi";
} else if(score > 7 && score <= 9) {
    level = "Khá";
} else if(score > 6 && score <= 7) {
    level = "Trung bình";
} else {
    level = "Yếu";
}

console.log("Your level is " + level);