var home = document.getElementById("home");
var works = document.getElementById("works");
var writing = document.getElementById("writing");
var teaching = document.getElementById("teaching");
var info = document.getElementById("info");
var menuBar = document.getElementsByClassName("menuitemContainer1");



home.addEventListener("mouseover", mouseOver);
// menubar.addEventListener("mouseout", mouseOut);

function mouseOver() {
    console.log("over");
    document.getElementById("projectsHome").style.display = "block";

}

function mouseOut() {
    console.log("out");
    document.getElementById("projectsHome").style.display = "none";
}

$('#nav > li').each(function(){
       var t = null;
       var li = $(this);
       li.hover(function(){
           t = setTimeout(function(){
               li.find("ul").slideDown(300);
               t = null;
           }, 300);
       }, function(){
           if (t){
               clearTimeout(t);
               t = null;
           }
           else
               li.find("ul").slideUp(200);
       });
   });





(function() {
   // your page initialization code here



})();
