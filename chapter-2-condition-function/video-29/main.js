console.log("Video 29");

// continue
console.log("Cac so chan (0 - 8): ")
for(let i = 0; i < 9; i++) {
    if(i % 2 != 0) continue; // thoat ra khoi lan lap hien tai
    console.log(i);
}

// break
let i = 0;
while(i < 10) {
    console.log(i);
    if(i === 8) {
        console.log("Dung lai o day thoi");
        break; // dung lap tai day
    }
    i++;
}