console.log("Video 32");

/*
return dùng để kết thúc hàm hoặc trả một giá trị ra ngoài
khi js gặp return, nó sẽ dừng thực thi ngay lập tức
 */

const sum = (a, b, c) => {
    console.log("Run before");
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof c !== "number"
    ) {
        console.log("Run empty return");
        return;
    }
    return a + b + c;
    console.log("Run after");
};

console.log(sum("1", 2, 3));