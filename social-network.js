var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//List everyone and for each of them, list the names of who they follow and who follows them

// data = {
//   f01: {}
//   f02: {}
//   f03: {}
// }

function followsMost(dataObj) {
  var namesList = [];
  var largestNum = 0
  for (var id in dataObj){
    if (dataObj[id]['follows'].length > largestNum) {
      largestNum = (dataObj[id]['follows'].length)
      namesList.push(dataObj[id]['name'])
    }
  }

  return "The person who follows the most people is: " + (namesList[namesList.length-1])


}


console.log(followsMost(data));

  // for (var prop in dataObj) {
  //   var id = prop; //f01 etc
  //   var name = data[id]['name']; //string name
  //   var age = data[id]['age'] //age
  //   var follows = data[id]['follows'] //array of strings
  //   namesList.push(name)