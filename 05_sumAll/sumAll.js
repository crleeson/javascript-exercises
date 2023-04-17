const sumAll = function (starting, ending) {
  if (
    typeof starting !== "number" ||
    typeof ending !== "number" ||
    starting < 0 ||
    ending < 0
  ) {
    return "ERROR";
  }

  let sum = 0;
  for (
    let i = Math.min(starting, ending);
    i < Math.max(starting, ending) + 1;
    i++
  ) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
