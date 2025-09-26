console.log("Video 45: Lab 03");

const products = [
    {
        name: "Áo khoác",
        price: 100,
        inStock: true,
    },
    {
        name: "Áo cộc",
        price: 300,
        inStock: true,
    },
    {
        name: "Áo choàng",
        price: 196,
        inStock: true,
    },
    {
        name: "Quần đùi",
        price: 80,
        inStock: false,
    },
    {
        name: "Tất dài",
        price: 50,
        inStock: false,
    },
];

const printProducts = () => {
    products.forEach((product, index) => {
        console.log(
            index,
            "name:",
            product.name,
            "price:",
            product.price,
            "in stock:",
            product.inStock
        );
    });
};

console.log("1. in ra tên của sản phẩm đầu tiên");
console.log(products[0].name);

console.log(
    "2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm"
);
products[1].price = 150;
printProducts();

console.log(
    "3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm"
);
products.push({
    name: "Khăn choàng",
    price: 80,
    inStock: true,
});
printProducts();

console.log(
    "4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm"
);
products.pop();
printProducts();

console.log("5. Dùng forEach( ) để in ra tất cả tên sản phẩm.");
products.forEach((product) => {
    console.log(product.name);
});

console.log("6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm.");
const productPrice = products.map((product) => {
    return product.price;
});
console.log(productPrice);

console.log("7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).");
const validProducts = products.filter((product) => {
    return product.inStock;
});
console.log(validProducts);

console.log("8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.");
for (let key in products[0]) {
    console.log(key, products[0][key]);
}
