const leapYears = function (num) {
  if (num % 400 === 0) {
    console.log("Leap year!");
  } else if (num % 100 === 0) {
    console.log("Not a leap year!");
  } else {
    console.log("Leap Year");
  }
};

// Do not edit below this line
module.exports = leapYears;
