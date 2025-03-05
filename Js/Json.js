const fs = require('fs');

// อ่านไฟล์ JSON
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data); // ใช้ json.loads()
  console.log(jsonData);
  
  // แก้ไขข้อมูล JSON
  jsonData.newKey = 'newValue';

  // เขียนไฟล์ JSON
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => { // ใช้ json.dumps()
    if (err) {
      console.error(err);
      return;
    }
    console.log('JSON data has been updated');
  });
});