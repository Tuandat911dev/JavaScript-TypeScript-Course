console.log("Video 27");

//  switch case

// score => A, B, C, D, F. Giỏi, Khá, Trung Bình
let score = 8;
let level;

switch (true) {
    case (score > 8 && score <= 10):
        level = "Giỏi";
        break;
    case (score > 7 && score <= 8):
        level = "Khá";
        break;
    case (score > 6 && score <= 7):
        level = "Trung bình";
        break;
    default:
        level = "Yếu";
        break;
}

console.log("Your level is " + level);
