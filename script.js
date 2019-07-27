var body=document.getElementById("gradient");
var css=document.getElementById("current");
var col1=document.querySelector(".left");

col1.addEventListener("input", function(){
  body.style.background="linear-gradient(to right,"+col1.value+","+col2.value+")";
  css.textContent=body.style.background + ";";
})

var col2=document.querySelector(".right");

col2.addEventListener("input", function(){
  body.style.background="linear-gradient(to right,"+col1.value+","+col2.value+")";
  css.textContent=body.style.background + ";";
})
