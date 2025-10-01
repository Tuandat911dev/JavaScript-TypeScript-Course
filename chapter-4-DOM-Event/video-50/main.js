console.log("Video 50: Giới thiệu Event");

/*
- Event là những hành động của user trên website (click, cuộn chuột,...)
- Khi sự kiện xảy ra, js có thể thực hiện một đoạn mã để phản hồi event

- Một số event hay gặp:
  + click	Người dùng nhấn chuột
  + input	Khi người dùng gõ vào ô nhập liệu
  + change	Khi giá trị input hoặc select thay đổi
  + keydown	Khi nhấn phím bất kỳ trên bàn phím
  + submit	Khi gửi form
*/

const myBtn = document.querySelector(".btn");
console.log(myBtn);

const sayHello = () => {
    alert("Hello World");
};
