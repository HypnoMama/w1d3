function getCharacterPositions(phrase) {
  var countObj = {};
  phrase = phrase.toLowerCase();

  for (var i = 0; i < phrase.length; i++) {
    var letterKey = phrase[i];

    if (countObj.hasOwnProperty(letterKey)) {
      countObj[letterKey].push(i);
    } else if (letterKey !== ' ') {
      countObj[letterKey] = [i];
    }

  }
  return countObj;
}

console.log(getCharacterPositions('Lighthouse in the house'))