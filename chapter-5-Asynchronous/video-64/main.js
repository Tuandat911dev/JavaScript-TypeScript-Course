console.log("Video 64: Xử lý lỗi với try/catch/finally");

/**
- Xử lý Exception bằng try/catch
- Ném ra lỗi bằng throw new Error
 */

const calculator = (a, b) => {
    if (b === 0) {
        throw new Error("Không thể chia cho 0 nhá");
    }
    return a / b;
};

try {
    let x = calculator(10, 0);
    console.log(x);
} catch (err) {
    console.log(err);
} finally {
    console.log("Done");
}
