console.log("Video 61: Promise");

/**
- Vấn đề của async đó là đôi khi có những tiến trình cần kết quả của
  tiến trình khác để chạy. Tuy nhiên async lại chạy //, khiến cho việc
  chạy các tác vụ này chỉ có thể được giải quyết bằng việc dùng callback lồng
  nhau. Tuy nhiên khi có quá nhiều callback lồng nhau ta sẽ bị callback hell.

=> Vì vậy promise được sinh ra để giải quyết vấn đề này, giúp cho async vừa có thể
   chạy như như sync, vừa tránh được callback hell

- 3 trạng thái của promise
  + pending: chưa có kết quả - đang xử lý
  + fulfilled: Thành công - trả về kết quả (resolve)
  + rejected: Thất bại - trả về lỗi (reject)

todo: Sử dụng Promise: .then(), .catch() và finally()

- Tạo ra Promise luôn luôn thành công hoặc thất bại:
  + Promise.resolve
  + Promise.reject
  + Promise.all => dùng để thực hiện các tác vụ async không liên quan tới nhau //
 */

const myPromise = () => {
    return new Promise((resolve, reject) => {
        // executor
        setTimeout(() => {
            //return
            resolve(2);
        }, 3000);
    });
};

console.log(1);
console.log(myPromise());

myPromise()
    .then((result) => {
        console.log(result);
        return Promise.resolve(3);
    })
    .then((result) => {
        console.log(result);
        return 4;
    })
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            reject("Error");
        });
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("done!");
    });


const resolvePromise = Promise.resolve();

const allPromise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

const allPromise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 5000);
});

Promise.all([allPromise1, allPromise2]).then((result) => {
    console.log(result);
});
