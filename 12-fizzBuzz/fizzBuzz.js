function fizzBuzz(start, end) {
  // Insert code here;
  var ans=[];
  for(var i=start;i<=end;i++){
    if(i%3==0 && i%5!=0)
    {
      ans.push("Fizz");
    }
    else if(i%3!=0 && i%5==0)
    {
      ans.push("Buzz");
    }
    else if(i%3==0 && i%5==0){
      ans.push("FizzBuzz");
    }else{
      ans.push(i);
    }
  }
  return ans;
}

// Do not edit this line;
module.exports = fizzBuzz;
