function add(x, y) {
  const sum = x + y;
  console.log(sum);
}

/*function addition(array) {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum;
}*/

function biggest(a, b) {
  let num = "";
  for (var i = 0; i < 2; i++) {
    if (a > num) {
      num = a;
    }
    if (b > num) {
      num = b;
    }
  }
  return num;
}

function num(x) {
  for (var i = 0; i < x; i++) {
    if (x % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
}

function average(array) {
  let total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  const avg = total / array.length;
  console.log(avg);
}

function length(string) {
  const len = string.length;
  console.log(len);
}

function double(array) {
  var doubled = [];
  for (var i = 0; i < array.length; i++) {
    doubled.push(array[i] * 2);
  }
  return doubled;
}

function longest(array) {
  var stg1 = array[0].length;
  var ans = array[0];
  for (var i = 1; i < array.length; i++) {
    var leng1 = array[i].length;
    if (leng1 > stg1) {
      ans = array[i];
      stg1 = leng1;
    }
  }
  return ans;
}

function prime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
