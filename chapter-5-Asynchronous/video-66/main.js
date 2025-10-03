console.log("Video 66: Async/Await");

/**
- async/await là cú pháp hiện đại nhất trong JavaScript để xử lý
  bất đồng bộ, được giới thiệu từ ES2017 (ES8).
 */

// promise

// fetch("http://localhost:8000/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// async/await

const fetchData = async () => {
    const res = await fetch("http://localhost:8000/posts");
    const data = await res.json();
    console.log(data);
};

const getBlog = fetch("http://localhost:8000/blogs").then((res) => res.json());

const getUser = fetch("http://localhost:8000/users").then((res) => res.json());

async function showData() {
    const user = await getUser;
    const blogs = await getBlog;
    console.log(user);
    console.log(blogs);
}

showData();

fetchData();
