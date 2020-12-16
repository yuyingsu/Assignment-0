class MySolution {

  countDownSum(num) {
    // Insert code here;
    var self=this;
    return num===1? 1:num + self.countDownSum(--num);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
