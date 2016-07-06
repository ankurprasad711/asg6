var memory=0;
var n;
var m;
var op;
var char='.';
setnumber1=function()
{
  document.getElementById('h').value+=char;
}
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
    case '+':m=(n+parseFloat(document.getElementById('h').value));
             break;
    case '/':m=n/parseFloat(document.getElementById('h').value);
              break;
    case '-':m=n-parseFloat(document.getElementById('h').value);
              break;
    case '*':m=n*parseFloat(document.getElementById('h').value);
              break;
  }
  var j=m;
    document.getElementById('h').value=j;

}
function memorysum()
{

  var t =parseFloat(memory)+ parseFloat(document.getElementById('h').value);
  document.getElementById('h').value=t;
}
function memoryclear()
{
  document.getElementById('h').value=0;
  memory=0;
}
function memory1()
{
  var s=document.getElementById('h').value;
  memory=s;

}
