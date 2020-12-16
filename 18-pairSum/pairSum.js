function pairSum(nums, target) {
  // Insert code here;
  if(nums.length<=1){
    throw "error";
  }
  var set = new Set();
  for(var i=0;i<nums.length;i++){
    if(set.has(nums[i])){
        return true;
    }else{
      set.add(target-nums[i]);
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
