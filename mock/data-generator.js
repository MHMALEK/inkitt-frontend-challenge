const fs = require('fs');
const { generateUniqID } = require('./util');
const path = require('path');

const initDataFileSrc = path.resolve(
  __dirname,
  './init-data.json',
);

const finalDataSrc = path.resolve(
  __dirname,
  './final-data.json',
);

const addIdToElemens = data => {
  return data.reduce((prev, current) => {
    current.id = generateUniqID(5);
    prev.push(current);
    if (current.replies.length > 0) {
      addIdToElemens(current.replies);
    }
    return prev;
  }, []);
};

const generateMockData = () => {
  fs.readFile(initDataFileSrc, (err, data) => {
    if (err) {
      return console.log(err);
    }

    const finalData = JSON.stringify(
      addIdToElemens(JSON.parse(data)),
    );

    fs.writeFile(finalDataSrc, finalData, err => {
      if (err) throw err;
      console.log('Data written to file');
    });
  });
};
generateMockData();
