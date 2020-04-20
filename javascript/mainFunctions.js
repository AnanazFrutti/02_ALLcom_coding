var diameterCircle = 200;

var keywords=['info', 'idealism', 'capitalism']; //,'idealism1','capitalism2','body3','xeno4'
var keywordsURL=['www.anaconda.cc/reality', 'www.anaconda.cc/idealism', 'www.anaconda.cc/capitalism', 'www.anaconda.cc/body', 'www.anaconda.cc/xeno']
var projectlist = ['The Great Encounter, The Ending', 'The Young Planet', '04PP', 'Shush Tones', 'Berlin Netzkunst', 'Next Project', 'TongueTongue', 'The Great Encounter, The Ending', 'The Young Planet', '04PP', 'Shush Tones', 'Berlin Netzkunst', 'Next Project', 'TongueTongue']

var $wrapper;
var $div;
var $p;
var $a;
var randomPosX;
var randomPosY;
var yyy;
var initialPositionX;
var initialPositionY;
var circleArr = new Array();


var startTime = +(new Date());
var startTimeArr = new Array(5);

var circle;

var circleObjectArr = new Array(); // Object mit allen Instanzen
var circleObjectArrPosY = new Array(); // aus Object herausdistillierte y-Werte
var stepArr = new Array(5);
let start = null;

var initialX;
var initialY;

var circlePosUpdate;

var slideIndex = 1;
var closeSlideshow = false;
var counter = 0;
var j = 1;

var currentParent;
var currentParentHover;

var exampleDestination = document.querySelector('.projecttitle1');

var initialSpanWrapperWidthArr = new Array();
var spanWrapperWidth;
var updateSpanWrapperWidthArr;

var element = document.body;

// ---------------------------------------------------- Dropdown menu on hover

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

// ---------------------------------------------------- Show/Hide overlay on click

   function on() {
        document.getElementById("overlay").style.display = "block";
    }
    function off() {
        document.getElementById("overlay").style.display = "none";
    }

// ---------------------------------------------------- jump to anchor on new site START

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

// ---------------------------------------------------- jump to anchor on new site END



// calculate scrollposition

$(function() {
    $(".projecttext").hide();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        /* now compute browserheight = y*/
        if (scroll >= 100) {
            // $('#dvContent').hide();
            // $('#dvContent2').show();
        } else {
            // $('#dvContent').show();
            // $('#dvContent2').hide();
        }
    });

// SHOW projectcaption

    $( ".projecttitleContainer" ).mouseenter(function() {
        currentParentHover = $(this).children().attr('class');
        console.log("check" + currentParentHover);
        // $('.aboutmenu').stop().animate({ opacity: 0}, 400);

        switch (currentParentHover) {
          case "projecttitle1":
              $( this ).stop().animate({
                opacity: .5,
              }, 400, function() {
                  $( '.containerProjecttitle:eq(0)').stop().css('display', 'block').animate({
                    opacity: 1,
                  }, 400);
              });
              break;
          case "projecttitle2":
              $( this ).stop().animate({
                opacity: .5,
              }, 400, function() {
                  $( '.containerProjecttitle:eq(1)').stop().css('display', 'block').animate({
                    opacity: 1,
                  }, 400);
              });
              break;
            break;
        }

    });

    $( ".projecttitleContainer" ).mouseleave(function() {
        // $('.aboutmenu').stop().animate({ opacity: 1}, 400);

        $( this ).stop().animate({
        opacity: 1,
          }, 400, function() {
              $( '.containerProjecttitle').stop().css('display', 'block').animate({
                opacity: 0,
              }, 400);
          });
        });


        // $( ".aboutmenu>p" ).mouseenter(function() {
        //     $( '.navbar').stop().animate({
        //         opacity: 1,}, 400);
        //       });
        //
        //
        //
        // $( ".aboutmenu>p" ).mouseleave(function() {
        //     $( '.navbar').stop().animate({
        //         opacity: 0,}, 400);
        //       });


});

// ENABLE/DISABLE SCROLL

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

// function createProjectlist() {
//
//   updateSpanWrapperWidthArr = new Array(projectlist.length);
//
//   for(var i=0;i<projectlist.length;i++){
//     updateSpanWrapperWidthArr[i]=0; //fill empty array with zeros
//     var $spanClass = $(".wrapperSpans div div").eq( i ).attr('class', 'wrapperProject' + i);
//     spanWrapperWidth = $('.wrapperProject' + i).width();
//     initialSpanWrapperWidthArr.push(spanWrapperWidth);
//
//     while (updateSpanWrapperWidthArr[i] <= window.innerWidth){
//         var $wrapperSpan = $('<span />').appendTo('.wrapperProject'+i);
//         $wrapperSpan.attr('class', 'wrapperSpan');
//         $wrapperSpan.text(projectlist[i]);
//         updateSpanWrapperWidthArr[i] += initialSpanWrapperWidthArr[i];
//     }
//   }
//   console.log("initialSpanWrapperWidthArr " + initialSpanWrapperWidthArr);
//   console.log("window.innerWidth " + window.innerWidth);
//   console.log("updateSpanWrapperWidthArr " + updateSpanWrapperWidthArr);
// }

// ----------------------------------------------------------------------------

// ---------------------------------------------------------------------------- CIRCLES START


class KeywordCircle { //create new KeywordCircle Object
    constructor(initialX,initialY){
        this.initialX = initialX;
        this.initialY = initialY;
    }
}

function generateCirclePosition() { // 1.1
    var grain = 100;
    const randomPosX = Math.floor(Math.random() * grain);
    const randomPosY = Math.floor(Math.random() * grain);
    const scaleX = (randomPosX, in_min, in_max, out_min, out_max) => {
    return (randomPosX - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    const scaleY = (randomPosY, in_min, in_max, out_min, out_max) => {
    return (randomPosY - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    initialX = scaleX(randomPosX,0, grain, 0, (window.innerWidth-diameterCircle));
    initialY = scaleY(randomPosY,0, grain, 0, (window.innerHeight-diameterCircle));
}

function createInitialCircles() { // 1.2
    for(var i=0;i<keywords.length;i++){ //create empty circle objects
        generateCirclePosition();
        circle = new KeywordCircle(initialX,initialY);
        circleObjectArr.push(circle); // Array mit allen KeywordCircle Instanzen
        // circleObjectArrPosY.push(circleObjectArr[i].initialY); // Array mit allen Keyword Instanzen y-Werten RAUS?
        console.log("i: " + i);
        console.log(circle);
    }
}


function updateCirclePos() {
    var step = (new Date()).getTime() - startTime; // zählt als counter hoch
    step *= (-0.01);

    // for(var i=0;i<5;i++){
    // }
    // console.log("steppArr: " + stepArr); funktioniert
    function bla() {
      for(var i=0;i<5;i++){ //circleObjectArr verändert sich innerhalb der for Schleife, aber nicht außerhalb....
        stepArr[i]=step;
        startTimeArr[i] = startTime;
        circlePosUpdate = circleObjectArrPosY[i] + stepArr[i];
        circleObjectArr[i].initialY = circlePosUpdate;
        $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);

          // if (circleObjectArr[i].initialY < 50) {
          //   circleObjectArrPosY[i] = 500;
          //
          //   startTime[i] = +(new Date()); // reset Starttime
          //   updateCirclePos();
          //   //   // generateCirclePosition();
          //   //   circleObjectArr[i].initialY = 200;
          //   //   console.log(circleObjectArr[i].initialY);
          //   //   // $(".circle" + i).css("left", circleObjectArr[i].initialX);
          //   //   $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);
          //   //   // updateCirclePos(); // starte updateCircle von Anfang an
          // }
          // REBIRTH NEW CIRCLE
          // if (circleObjectArr[i].initialY < 50) {


            // updateCirclepos?
            // generateCirclePosition();
            // circle = new KeywordCircle(initialX,initialY);
            // circleObjectArr.push(circle);
            // $(".circle" + i).css("left", circleObjectArr[i].initialX);
            // $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);
            // circleObjectArrPosY.push(circleObjectArr[i].initialY);
            //
            // console.log(i);
            // console.log("davor: "+circleObjectArrPosY[i]);
            // console.log(circleArrPos[i].initialY);
            // circleObjectArrPosY[i] = window.innerHeight-100;//array updatet sich nicht
            // circleObjectArr[i].initialY = circleObjectArrPosY[i];
            // console.log("danach: "+circleObjectArrPosY[i]);
            // console.log(circleObjectArr[i].initialY);
            // debugger;
          // }

        }
    }
    requestAnimationFrame(updateCirclePos);

}

function drawFirstCircles() { // 2
  // createInitialCircles(); //raus und stattdessen in document.ready function drinlassen?
    for(var i=0;i<keywords.length;i++){ // fill empty circle objects
        $wrapper = $('<div />').appendTo('body');
        $wrapper.attr('class', 'circleAnimation');
        $div = $('<div />').appendTo($wrapper);
        $p = $('<p />').appendTo($div);
        $a = $('<a />').appendTo($p);
        $a.attr('href', keywordsURL[i]);
        $a.text( keywords[i] );
        $div.attr('class', 'circle'+ i);
        $p.attr('class', 'textKeywords');
        // rotation
        var rotation1 = 1;
        var rotation2 = 2;
        var rotation3 = 3;
        var randomIdCircle = Math.random() < 0.5 ? rotation1 : (Math.random() < 0.5 ? rotation2 : rotation3);
        $div.attr('id', 'rotationCircle'+ randomIdCircle);
        // position
        $(".circle" + i).css("left", circleObjectArr[i].initialX);
        $(".circle" + i).css("--keywordcircle-top", circleObjectArr[i].initialY);
        console.log("circleObjectArr " + circleObjectArr[i]);
    }

    // updateCirclePos(); //raus und stattdessen in document.ready function drinlassen?
  }

// ---------------------------------------------------------------------------- CIRCLES END


 $(document).ready(function(){
     // createProjectlist();
     // DRAW CIRCLES
     createInitialCircles();
     drawFirstCircles();
     updateCirclePos();
 });



 var calculateThumbnailHeight = (function () {
         // dynamically calculate and change value of clipProjecttitle based on Height of imageThumbnail
         var imageHeight = $(".imageThumbnail:eq(0)").innerHeight();
         $(".clipProjecttitle1").css('--height-clip', imageHeight);
         $(".uno").css('--height-clip', imageHeight);
         $(".clipPath1").css('--height-clip', imageHeight);

         var imageHeight2 = $(".imageThumbnail:eq(1)").innerHeight();
         $(".clipProjecttitle2").css('--height-clip2', imageHeight2);
         $(".due").css('--height-clip2', imageHeight2);

         var imageHeight3 = $(".imageThumbnail:eq(2)").innerHeight();
         $(".clipProjecttitle3").css('--height-clip3', imageHeight3);
         $(".tres").css('--height-clip3', imageHeight3);
    });



$(document).ready(calculateThumbnailHeight);
$(window).resize(calculateThumbnailHeight);
