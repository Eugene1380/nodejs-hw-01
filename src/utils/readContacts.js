const fs = require('fs');
const path = require('path');

function readContacts() {
  const filePath = path.resolve(__dirname, '../db/db.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8'); 
    return JSON.parse(data);
  } catch (error) {
    console.error('Ошибка при считывании файла:', error);
    throw error;
  }
}

module.exports = readContacts;
