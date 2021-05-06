const cities =['Mexico City', 'Los Angeles', 'Seattle', 'New York City'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Invalid String value'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

module.exports =  { 
  randomString,
  reverseString,
  reverseString2
};
