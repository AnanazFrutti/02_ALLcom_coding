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

           // var element = document.getElementsByClassName('projectcontainer1');
           // var element = document.getElemetbyId('writingsAnchor1');

//            var headerOffset = 100;
//            var elementPosition = element.getBoundingClientRect();
// ;
//             console.log(elementPosition);
//            var offsetPosition = elementPosition - headerOffset;


           // document.querySelector(this.getAttribute('href')).scrollIntoView({
           //   top: offsetPosition,
           //   behavior: 'smooth'
           // });
       });
   });


(function() {
   // your page initialization code here
})();
