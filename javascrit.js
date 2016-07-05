var n;
var m;
var op;
setnumber=function(arg1)
{
document.getElementById('h').value+=arg1;

}
c=function() {
 console.log("error");
  document.getElementById('h').value='';
}
st=function() {
  var input=document.getElementById('h').value;
  input=input.slice(0,-1);
  document.getElementById('h').value=input;
}
setoperator=function(arg2)
{
  n=parseFloat(document.getElementById('h').value);
  document.getElementById('h').value="";
  op=arg2;
}
play=function()
{
  switch(op)
  {
    case '+':m=n+parseFloat(document.getElementById('h').value);
             break;
    case '/':m=n/parseFloat(document.getElementById('h').value);
              break;
    case '-':m=n-parseFloat(document.getElementById('h').value);
              break;
    case '*':m=n*parseFloat(document.getElementById('h').value);
              break;
  }
    document.getElementById('h').value=m;

}
