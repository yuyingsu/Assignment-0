class MySolution {
  constructor() {
    this.flag = false;
      // this is optional to use;
  }
  binarySearch(nums, target) {
    // Insert code here;
    var self=this;
    let s=0;
    let e=nums.length-1;
    let mid=Math.floor((s+e)/2);
    if(s<=e)
    {
        if(nums[mid]<target){
          return self.binarySearch(nums.slice(mid+1, e+1),target);
        }else if(nums[mid]===target){
          return true;
        }else{
          return self.binarySearch(nums.slice(s,mid),target);
        }
    }else{
        return false;
      }
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
