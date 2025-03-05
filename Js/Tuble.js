const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// ใช้ Set เพื่อกำจัดค่าที่ซ้ำกัน
const uniqueValues = [...new Set(arrayWithDuplicates)];

console.log(uniqueValues); // [1, 2, 3, 4, 5]