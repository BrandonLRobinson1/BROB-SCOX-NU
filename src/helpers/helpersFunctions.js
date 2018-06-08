export const allLettersRegEx = (input) => {
  const letterRegEx = /^[a-zA-Z]+$/;
  return letterRegEx.test(input);
}

export const allNumbersRegEx = input => {
  const numberRegEx = /^[0-9]+$/;
  return numberRegEx.test(input);
};

export const emailRegEx = input => {
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  return emailRegEx.test(input);
}

// eslint-disable-next-line
// export const parseAndPackage = (userInput, dropDownValue) => {
//   const infoObj = {};
//   const hccidRegEx1 = /^h[0-9]{8}$/;
//   const hccidRegEx2 = /^r[0-9]{8}$/;
//   // const claim1RegEx = /^[0-9]{9}$/;
//   // const claim2RegEx = /^[0-9]{11}$/;
//   // const claim3RegEx = /^r[0-9]{16}$/;
//   // const claim4RegEx = /^q[0-9]{16}$/;

//   infoObj.searchType = 'Name';
//   const userInputNoExtraSpaces = userInput.replace(/\s+/g, ' ');
//   userInputNoExtraSpaces.split(' ').forEach((name, index) => (infoObj[`searchValue${index + 1}`] = name));
// }
// return infoObj;
//   };

export const specialCharacterValidation = input => {
  const specialCharacterRegEx = /.*[!~`'@;:#$%^*()_+={}[\]/\\//?<>,.].*/; // made sure to escape brackets with \
  return specialCharacterRegEx.test(input);
};

// does the sorting for the views
export const sortMe = (data, keyName, ascendingOrDescending) =>
  // takes a set of data (Array) to sort through, a key name to sort by, and how to sort (ascendingOrDescending)
  (ascendingOrDescending.toLowerCase() === 'ascending'
    ? data.sort((a, b) => (a[keyName] > b[keyName] ? 1 : -1))
    : data.sort((a, b) => (a[keyName] < b[keyName] ? 1 : -1)));


// make every first word uppercase instead of the whole sentence
const replaceAt = (index, replacement, word) =>
  word.substr(0, index) + replacement + word.substr(index + replacement.length);
export const capFirstWord = sentence => {
  const newWord = [];
  sentence.split(' ').map(word => {
    word = word.toLowerCase();
    const cap = (word[0] || '').toUpperCase();
    word = replaceAt(0, cap, word);
    return newWord.push(word);
  });
  return newWord.join(' ');
};

export const addDecimals = number => {
  // since javascript turns 10000.00 into 10000 I made a function that if you got 10000 it'll return '10000.00' or if you pass in the nunber 65.05 itll just return 65.05
  const numberString = number.toString().split('.');
  if (numberString[1] && numberString[1].length === 1) numberString[1] += '0';
  if (numberString[0] === '') numberString[0] = '0';
  return numberString.length !== 2 ? `${numberString}.00` : numberString.join('.');
};

export const convertToPercentage = number => {
  const default1 = '0',
    default2 = '100';

  if (number < 0 || typeof number !== 'number' || !number) return default1;
  if (number === 100.0 || number > 100) return default2;

  const numberString = number.toString().split('.');
  return numberString.length !== 2 ? `${number}.00` : Number(number).toFixed(2); // toFixed(2) rounds by the 2nd decimal place, and turns it into a string
};

export const handleDollarChange = number => {
  const numberString = number.toString().split('.');
  return numberString.length !== 2 ? `${number}.00` : Number(number).toFixed(2); // toFixed(2) rounds by the 2nd decimal place, and turns it into a string
};