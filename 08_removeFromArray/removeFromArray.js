const removeFromArray = function (arr, x) {
  let y;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) y = i;
  }
  arr.splice(y, 0);
  console.log(arr);
};

let arr = [1, 2, 3, 4];

removeFromArray(arr, 3);

// Do not edit below this line
module.exports = removeFromArray;
