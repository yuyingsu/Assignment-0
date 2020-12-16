function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var ans=1;
  for(var i=0;i<args.length;i++){
    ans*=args[i];
  }
  return ans;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
