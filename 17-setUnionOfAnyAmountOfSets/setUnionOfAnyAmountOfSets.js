function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var set = new Set();
  for(var i=0;i<args.length;i++)
  {
      args[i].forEach((item, i) => {
        set.add(i);
      });
  }
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
