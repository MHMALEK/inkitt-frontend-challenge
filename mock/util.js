const generateUniqID = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }
  return result;
};

const generateRandomNumber = max => {
  return Math.floor(Math.random() * (max + 1));
};

// generate random date for comment if needed
const randomDateGenerator = (
  start = new Date(2012, 0, 1),
  end = new Date(),
) => {
  return new Date(
    start.getTime() +
      Math.random() * (end.getTime() - start.getTime()),
  );
};

exports.generateUniqID = generateUniqID;
exports.generateRandomNumber = generateRandomNumber;
exports.randomDateGenerator = randomDateGenerator;
