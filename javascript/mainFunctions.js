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


(function() {
   // your page initialization code here
})();
