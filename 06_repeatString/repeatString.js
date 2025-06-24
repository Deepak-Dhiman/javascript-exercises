const repeatString = function (string, num) {
  let returned = "";
  for (let i = 0; i < num; i++) {
    returned += string;
  }
  return returned;
};

str = "hey";

console.log(repeatString(str, 3));

// Do not edit below this line
module.exports = repeatString;
