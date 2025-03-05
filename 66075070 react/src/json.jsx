import React, { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';

function JsonComponent() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const filePath = path.join(__dirname, 'ex.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      setJsonData(JSON.parse(data));
    });
  }, []);

  const handleChange = () => {
    const updatedData = { ...jsonData, name: 'Jane Doe' };
    const filePath = path.join(__dirname, 'ex.json');
    fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      setJsonData(updatedData);
    });
  };

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      <button onClick={handleChange}>เปลี่ยนค่า</button>
    </div>
  );
}

export default JsonComponent;