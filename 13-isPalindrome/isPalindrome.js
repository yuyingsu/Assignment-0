function isPalindrome(word) {
  // Insert code here;
  var n=word.length;
  for(var i=0;i<n/2;i++){
    if(word[i]!=word[n-i-1])
    {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
