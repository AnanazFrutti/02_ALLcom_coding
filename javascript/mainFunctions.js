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


   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();

           var anchorId = this.getAttribute('href');
           anchorId = anchorId.substring(1);
           var element = document.getElementById(anchorId);
           console.log(typeof anchorId);

           var headerOffset = 30;
           var elementPosition = element.getBoundingClientRect().top;
           var offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
             top: offsetPosition,
             behavior: 'smooth'
           });
       });
   });

// jump to anchor on new site
var jump=function(e)
   {
      if (e){
          e.preventDefault();
          var target = $(this).attr("href");
          console.log("1");
      }else{
          var target = location.hash;
          console.log("2");
      }

      $('html,body').animate(
      {
          scrollTop: $(target).offset().top
      },2000,function()
      {
          location.hash = target;
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
        $('html, body').show();
        console.log("4");
    }
});

// jump to anchor on new site END


(function() {
   // your page initialization code here
})();
