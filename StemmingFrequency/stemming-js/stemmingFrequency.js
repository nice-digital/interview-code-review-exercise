// function stemWordWorking(word) {
//   const inputArray = input.replace(/\./g, "").toLowerCase().split(" ");
//   var arr = [];
//   inputArray.forEach((word) => {
//     const stemmedWord = word.replace(/(ly|ses|)$/, "");
//     arr.push(stemmedWord);
//   });
// }

function stemWord(word) {
  const suffixesRemoved = word.replace(/(ly|ses|sification|ing|s|lier|lies|y|sify|ed|sified)$/, "");
  const prefixesRemoved = suffixesRemoved.replace(/^(un|sub|mis|de|re)/, "");
  return prefixesRemoved;
}

function run(input, wordToCheck) {
  try {
    if (typeof input == "string") {

      // Convert input string into stemmed word list
      const inputArray = input.replace(/\./g, "").toLowerCase().split(" ");
      var stemmedInputArray = [];
      inputArray.forEach((word) => {
        const stemmedWord = stemWord(word);
        stemmedInputArray.push(stemmedWord);
      });


      // Get the frequency of wordToCheck
      const stemmedWord = stemWord(wordToCheck);
      const frequency = stemmedInputArray.filter((element) => element === stemmedWord).length;
      return frequency;

    } else {
      throw new Error("Input is not a string");
    }
  } catch (e) {
    return e;
  }
}

module.exports = {
  stemWord,
  run
};
