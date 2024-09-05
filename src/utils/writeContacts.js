const fs = require('fs');
const path = require('path');

function writeContacts(data) {
  const filePath = path.resolve(__dirname, '../db/db.json');
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf8');
  } catch (error) {
    console.error('Ошибка при записи в файл:', error);
    throw error;
  }
}

module.exports = writeContacts;
