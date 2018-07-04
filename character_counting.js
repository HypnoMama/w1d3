function countLetters(phrase) {
  var countObj = {};
  //loop thru string
  //add the letters as a key with the number of
  //occurences as the value if occurence is
  //greater than zero
  phrase = phrase.split(' ').join('').toLowerCase();
  for (var i = 0; i < phrase.length; i++) {
    var letterKey = phrase[i];
    if (countObj.hasOwnProperty(letterKey)) {
      countObj[letterKey]++;
    } else {
      countObj[letterKey] = 1;
    }

  }
  return countObj;
}

console.log(countLetters("Lighthouse in the house"))