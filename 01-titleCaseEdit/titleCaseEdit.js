function titleCaseEdit(title) {
  // Insert code here;
  var res=title.split(" ");
  var ans="";
  for(var i=0;i<res.length;i++){
    var first=(res[i].charAt(0)+"").toUpperCase();
    var newElem=first+res[i].substring(1);
    if(i!=res.length-1){
      ans+=newElem+" ";
    }else{
      ans+=newElem;
    }

  }
  return ans;
}

// Do not edit this line;
module.exports = titleCaseEdit;
