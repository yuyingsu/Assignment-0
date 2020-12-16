function frequencyCounter(word) {
  // Insert code here;
  var count={};
  for(var i=0;i<word.length;i++){
    count[word[i]]=(count[word[i]]+1)||1;
  }
  return count;
}

// Do not edit this line;
module.exports = frequencyCounter;
