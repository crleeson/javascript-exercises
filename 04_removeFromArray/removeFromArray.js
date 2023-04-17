const removeFromArray = function (array, ...vals) {
  const output = [];

  array.forEach((element) => {
    if (!vals.includes(element)) {
      output.push(element);
    }
  });

  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
