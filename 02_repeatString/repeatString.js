const repeatString = function (string, numTimes) {
  let output = "";

  if (numTimes < 0) {
    output = "ERROR";
  } else {
    for (let i = 0; i < numTimes; i++) {
      output += string;
    }
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
