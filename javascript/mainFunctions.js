$('#nav > li').each(function(){
       var t = null;
       var li = $(this);
       li.hover(function(){
           t = setTimeout(function(){
               li.find("ul").slideDown(300);
               t = null;
           }, 100);
       }, function(){
           if (t){
               clearTimeout(t);
               t = null;
           }
           else
               li.find("ul").slideUp(300);
       });
   });


   function on() {
        document.getElementById("overlay").style.display = "block";
    }
    function off() {
        document.getElementById("overlay").style.display = "none";
    }


// jump to anchor on new site
var jump=function(e)
   {
      if (e) {
         // ausgegeben wenn man auf index.html ist und auf den link index.html clickt
          e.preventDefault();
          var target = $(this).attr("href"); // returns name of anchor from menu
          console.log("1" + ", target: " + target);
      } else {
         // ausgegeben wenn man von index.html auf einen link mit anchor clickt; anschließend wird 3 ausgelöst
          var target = location.hash;
          console.log("2" + ", target: " + target);
      }

      var scrollrrr = $(target).offset().top - 43;

      $('html,body').animate(
         {
             scrollTop: scrollrrr
         }, 1000, function()
         {
             location.hash = scrollrrr; // wird ausgeführt sobald die scrollanimation zu Ende ist
             console.log("5" + ", target: " + target);
      });

   }

$('html, body').hide();

$(document).ready(function()
{

    $('a[href^=\\#]').on("click", jump); // find all href elements starting with #, and execute jump function click event handler the jump function to it

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
            console.log("3");
        }, 0);
    }else{
      // ausgegeben wenn man von index.html auf writings (ohne anchor) clickt, oder von writings.html auf index (ohne anchor)
        $('html, body').show();
        console.log("4");
    }
});

// jump to anchor on new site END


(function() {
   // your page initialization code here
})();
