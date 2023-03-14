function loop(string, number) {
  for (var i = 0; i < number; i++) {
    console.log(string);
  }
}

function addition(array) {
  const length = array.length;
  let sum = 0;
  for (var i = 0; i < length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function evenNumbers(array) {
  const newArray = [];
  const length = array.length;
  for (var i = 0; i < length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function reverse(string) {
  const array = string.split("");
  const reversedArray = array.reverse();
  let newString = "";
  for (var i = 0; i < reversedArray.length; i++) {
    newString = newString + reversedArray[i];
  }
  return newString;
}

function vowels(string) {
  const vols = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (vols.includes(currentChar)) {
      count++;
    }
  }
  return count;
}

function largest(array) {
  let max = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function primeNumber(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function palindrome(string) {
  const length = string.length;
  for (var i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function square(array) {
  const squareNo = [];
  const length = array.length;

  for (var i = 0; i < length; i++) {
    squareNo.push(array[i] * array[i]);
  }
  return squareNo;
}

function joinArray(array1, array2) {
  let newArray = [];
  const len1 = array1.length;
  const len2 = array2.length;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (array1[i] === array2[j]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
}
