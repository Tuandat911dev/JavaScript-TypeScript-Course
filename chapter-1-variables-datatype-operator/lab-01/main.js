// Lab 01
const fullName = "Pham Tuan Dat";
const birthYear = 2004;
const isStudent = true;
const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;

console.log(`
Tên: ${fullName}
Tuổi: ${age}
Sinh viên: ${isStudent ? "Đúng" : "Sai"}
`);