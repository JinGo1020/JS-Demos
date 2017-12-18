
var c=0
var t
function timedCount()
{
document.getElementById("start").style.display="none";
document.getElementById("stop").style.display="inline";
document.getElementById('txt').value=c
c=c+1
t=setTimeout("timedCount()",1000)
}

function stopCount()
{
document.getElementById("start").style.display="inline";
document.getElementById("stop").style.display="none";
c=0;
setTimeout("document.getElementById('txt').value=0",0);
clearTimeout(t);
}
